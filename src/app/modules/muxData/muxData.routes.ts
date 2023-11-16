import express from 'express';
import { MuxDataController } from './muxData.controller';

const router = express.Router();

router.get('/', MuxDataController.getAllMuxData);
router.post(
  '/',

  MuxDataController.createMuxData
);
router.get('/:id', MuxDataController.getMuxDataById);
router.patch('/:id', MuxDataController.updateMuxData);
router.delete('/:id', MuxDataController.deleteMuxData);

export const MuxDataRouter = router;
