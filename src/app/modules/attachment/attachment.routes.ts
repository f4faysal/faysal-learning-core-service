import express from 'express';
import { AttachmentController } from './attachment.controller';

const router = express.Router();

router.get('/', AttachmentController.getAllAttachment);
router.post(
  '/',

  AttachmentController.createAttachment
);
router.get('/:id', AttachmentController.getAttachmentById);
router.patch('/:id', AttachmentController.updateAttachment);
router.delete('/:id', AttachmentController.deleteAttachment);

export const AttachmentRouter = router;
