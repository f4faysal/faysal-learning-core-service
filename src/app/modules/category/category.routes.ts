import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.get('/', CategoryController.getAllCategory);
router.post(
  '/',

  CategoryController.createCategory
);

export const CategoryRouter = router;
