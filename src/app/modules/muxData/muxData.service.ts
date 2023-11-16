import { MuxData } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createMuxData = async (paylod: MuxData): Promise<MuxData> => {
  const result = await prisma.muxData.create({ data: paylod });
  return result;
};

const getAllMuxData = async (): Promise<MuxData[]> => {
  const result = await prisma.muxData.findMany();

  return result;
};
const getMuxDataById = async (id: string): Promise<MuxData | null> => {
  const result = await prisma.muxData.findUnique({ where: { id } });

  return result;
};
const updateMuxData = async (id: string, paylod: MuxData): Promise<MuxData> => {
  const result = await prisma.muxData.update({ where: { id }, data: paylod });

  return result;
};

const deleteMuxData = async (id: string): Promise<MuxData> => {
  const result = await prisma.muxData.delete({ where: { id } });

  return result;
};

export const MuxDataService = {
  createMuxData,
  getAllMuxData,
  getMuxDataById,
  updateMuxData,
  deleteMuxData,
};
