import { Purchase } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPurchase = async (paylod: Purchase): Promise<Purchase> => {
  const result = await prisma.purchase.create({ data: paylod });
  return result;
};

const getAllPurchase = async (): Promise<Purchase[]> => {
  const result = await prisma.purchase.findMany();

  return result;
};
const getPurchaseById = async (id: string): Promise<Purchase | null> => {
  const result = await prisma.purchase.findUnique({ where: { id } });

  return result;
};
const updatePurchase = async (
  id: string,
  paylod: Purchase
): Promise<Purchase> => {
  const result = await prisma.purchase.update({ where: { id }, data: paylod });

  return result;
};

const deletePurchase = async (id: string): Promise<Purchase> => {
  const result = await prisma.purchase.delete({ where: { id } });

  return result;
};

export const PurchaseService = {
  createPurchase,
  getAllPurchase,
  getPurchaseById,
  updatePurchase,
  deletePurchase,
};
