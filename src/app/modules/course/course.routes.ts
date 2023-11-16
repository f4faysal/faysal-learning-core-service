import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

router.get('/', CourseController.getAllCourse);
router.post(
  '/',

  CourseController.createCourse
);
router.get('/:id', CourseController.getCourseById);
router.patch('/:id', CourseController.updateCourse);
router.delete('/:id', CourseController.deleteCourse);

export const CourseRouter = router;
