import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCategory = async (paylod: Category): Promise<Category> => {
  const result = await prisma.category.create({ data: paylod });

  return result;
};

const getAllCategory = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();

  return result;
};

export const CategoryService = { createCategory, getAllCategory };
