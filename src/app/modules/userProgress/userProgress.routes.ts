import express from 'express';
import { UserProgressController } from './userProgress.controller';

const router = express.Router();

router.get('/', UserProgressController.getAllUserProgress);
router.post(
  '/',

  UserProgressController.createUserProgress
);
router.get('/:id', UserProgressController.getUserProgressById);
router.patch('/:id', UserProgressController.updateUserProgress);
router.delete('/:id', UserProgressController.deleteUserProgress);

export const UserProgressRouter = router;
