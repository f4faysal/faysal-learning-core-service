import express from 'express';

import { AttachmentRouter } from '../modules/attachment/attachment.routes';
import { AuthRouter } from '../modules/auth/user.routes';
import { CategoryRouter } from '../modules/category/category.routes';
import { ChapterRouter } from '../modules/chapter/chapter.routes';
import { CourseRouter } from '../modules/course/course.routes';
import { MuxDataRouter } from '../modules/muxData/muxData.routes';
import { PurchaseRouter } from '../modules/purchase/purchase.routes';
import { UserProgressRouter } from '../modules/userProgress/userProgress.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/auth',
    routes: AuthRouter,
  },
  {
    path: '/category',
    routes: CategoryRouter,
  },
  {
    path: '/course',
    routes: CourseRouter,
  },
  {
    path: '/chapter',
    routes: ChapterRouter,
  },
  {
    path: '/attachment',
    routes: AttachmentRouter,
  },
  {
    path: '/mux-data',
    routes: MuxDataRouter,
  },
  {
    path: '/userProgress',
    routes: UserProgressRouter,
  },
  {
    path: '/purchase',
    routes: PurchaseRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
