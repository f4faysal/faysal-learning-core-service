import express from 'express';

import { AuthRouter } from '../modules/auth/user.routes';
import { CategoryRouter } from '../modules/category/category.routes';
import { CourseRouter } from '../modules/course/course.routes';
import { UserRouter } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: AuthRouter,
  },
  {
    path: '/',
    routes: UserRouter,
  },
  {
    path: '/category',
    routes: CategoryRouter,
  },
  {
    path: '/course',
    routes: CourseRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
