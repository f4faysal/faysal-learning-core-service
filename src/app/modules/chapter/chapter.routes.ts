import express from 'express';
import { ChapterController } from './chapter.controller';

const router = express.Router();

router.get('/', ChapterController.getAllChapter);
router.get('/:id', ChapterController.getChapterById);
router.get('/lastchapter/:id', ChapterController.lastchapter);
router.post(
  '/',

  ChapterController.createChapter
);
router.patch('/:id', ChapterController.updateChapter);
router.put('/reorder', ChapterController.reorderChapter);
router.delete('/:id', ChapterController.deleteChapter);

export const ChapterRouter = router;
