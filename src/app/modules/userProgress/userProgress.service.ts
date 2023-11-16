import { UserProgress } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createUserProgress = async (
  paylod: UserProgress
): Promise<UserProgress> => {
  const result = await prisma.userProgress.create({ data: paylod });
  return result;
};

const getAllUserProgress = async (): Promise<UserProgress[]> => {
  const result = await prisma.userProgress.findMany();

  return result;
};
const getUserProgressById = async (
  id: string
): Promise<UserProgress | null> => {
  const result = await prisma.userProgress.findUnique({ where: { id } });

  return result;
};
const updateUserProgress = async (
  id: string,
  paylod: UserProgress
): Promise<UserProgress> => {
  const result = await prisma.userProgress.update({
    where: { id },
    data: paylod,
  });

  return result;
};

const deleteUserProgress = async (id: string): Promise<UserProgress> => {
  const result = await prisma.userProgress.delete({ where: { id } });

  return result;
};

export const UserProgressService = {
  createUserProgress,
  getAllUserProgress,
  getUserProgressById,
  updateUserProgress,
  deleteUserProgress,
};
