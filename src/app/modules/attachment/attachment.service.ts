import { Attachment } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createAttachment = async (paylod: Attachment): Promise<Attachment> => {
  const result = await prisma.attachment.create({ data: paylod });
  return result;
};

const getAllAttachment = async (): Promise<Attachment[]> => {
  const result = await prisma.attachment.findMany();

  return result;
};
const getAttachmentById = async (id: string): Promise<Attachment | null> => {
  const result = await prisma.attachment.findUnique({ where: { id } });

  return result;
};
const updateAttachment = async (
  id: string,
  paylod: Attachment
): Promise<Attachment> => {
  const result = await prisma.attachment.update({
    where: { id },
    data: paylod,
  });

  return result;
};

const deleteAttachment = async (id: string): Promise<Attachment> => {
  const result = await prisma.attachment.delete({ where: { id } });

  return result;
};

export const AttachmentService = {
  createAttachment,
  getAllAttachment,
  getAttachmentById,
  updateAttachment,
  deleteAttachment,
};
