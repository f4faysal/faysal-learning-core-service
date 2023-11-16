import Mux from '@mux/mux-node';
import { Chapter } from '@prisma/client';
import prisma from '../../../shared/prisma';

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!
);

const createChapter = async (paylod: Chapter): Promise<Chapter> => {
  const result = await prisma.chapter.create({ data: paylod });
  return result;
};

const lastchapter = async (id: string): Promise<number> => {
  const lastChapter = await prisma.chapter.findFirst({
    where: {
      courseId: id,
    },
    orderBy: {
      position: 'desc',
    },
  });

  const newPosition = lastChapter ? lastChapter.position + 1 : 1;

  return newPosition;
};

const getAllChapter = async (): Promise<Chapter[]> => {
  const result = await prisma.chapter.findMany({
    include: {
      muxData: true,
    },
  });
  return result;
};

const getChapterById = async (id: string): Promise<Chapter | null> => {
  const result = await prisma.chapter.findUnique({
    where: { id },
    include: {
      muxData: true,
    },
  });
  return result;
};
const updateChapter = async (id: string, paylod: Chapter): Promise<Chapter> => {
  const result = await prisma.chapter.update({ where: { id }, data: paylod });

  if (result?.videoUrl) {
    const existingMuxData = await prisma.muxData.findFirst({
      where: {
        chapterId: id,
      },
    });

    if (existingMuxData) {
      await Video.Assets.del(existingMuxData.assetId);
      await prisma.muxData.delete({
        where: {
          id: existingMuxData.id,
        },
      });
    }

    const asset = await Video.Assets.create({
      input: result.videoUrl,
      playback_policy: 'public',
      test: false,
    });

    await prisma.muxData.create({
      data: {
        chapterId: id,
        assetId: asset.id,
        playbackId: asset.playback_ids?.[0]?.id,
      },
    });
  }

  return result;
};

const deleteChapter = async (id: string): Promise<Chapter> => {
  const result = await prisma.chapter.delete({ where: { id } });

  return result;
};

const reorderChapter = async (list: any) => {
  for (const item of list) {
    await prisma.chapter.update({
      where: { id: item.id },
      data: { position: item.position },
    });
  }

  return 'success';
};

export const ChapterService = {
  createChapter,
  getAllChapter,
  getChapterById,
  updateChapter,
  deleteChapter,
  lastchapter,
  reorderChapter,
};
