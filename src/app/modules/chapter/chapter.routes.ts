import express from 'express';
import { ChapterController } from './chapter.controller';

const router = express.Router();

router.get('/', ChapterController.getAllChapter);
router.post(
  '/',

  ChapterController.createChapter
);
router.get('/:id', ChapterController.getChapterById);
router.patch('/:id', ChapterController.updateChapter);
router.delete('/:id', ChapterController.deleteChapter);

export const ChapterRouter = router;
