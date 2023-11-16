import { StripeCustomer } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createStripeCustomer = async (
  paylod: StripeCustomer
): Promise<StripeCustomer> => {
  const result = await prisma.stripeCustomer.create({ data: paylod });
  return result;
};

const getAllStripeCustomer = async (): Promise<StripeCustomer[]> => {
  const result = await prisma.stripeCustomer.findMany();

  return result;
};
const getStripeCustomerById = async (
  id: string
): Promise<StripeCustomer | null> => {
  const result = await prisma.stripeCustomer.findUnique({ where: { id } });

  return result;
};
const updateStripeCustomer = async (
  id: string,
  paylod: StripeCustomer
): Promise<StripeCustomer> => {
  const result = await prisma.stripeCustomer.update({
    where: { id },
    data: paylod,
  });

  return result;
};

const deleteStripeCustomer = async (id: string): Promise<StripeCustomer> => {
  const result = await prisma.stripeCustomer.delete({ where: { id } });

  return result;
};

export const StripeCustomerService = {
  createStripeCustomer,
  getAllStripeCustomer,
  getStripeCustomerById,
  updateStripeCustomer,
  deleteStripeCustomer,
};
