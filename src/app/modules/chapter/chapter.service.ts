import { Chapter } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createChapter = async (paylod: Chapter): Promise<Chapter> => {
  const result = await prisma.chapter.create({ data: paylod });
  return result;
};

const getAllChapter = async (): Promise<Chapter[]> => {
  const result = await prisma.chapter.findMany();

  return result;
};
const getChapterById = async (id: string): Promise<Chapter | null> => {
  const result = await prisma.chapter.findUnique({ where: { id } });

  return result;
};
const updateChapter = async (id: string, paylod: Chapter): Promise<Chapter> => {
  const result = await prisma.chapter.update({ where: { id }, data: paylod });

  return result;
};

const deleteChapter = async (id: string): Promise<Chapter> => {
  const result = await prisma.chapter.delete({ where: { id } });

  return result;
};

export const ChapterService = {
  createChapter,
  getAllChapter,
  getChapterById,
  updateChapter,
  deleteChapter,
};
