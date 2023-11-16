import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CourseService } from './stripeCustomer.service';

const createCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CourseService.createCourse(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course created successfully',
      data: result,
    });
  }
);

const getAllCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CourseService.getAllCourse();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Courses fetched successfully',
      data: result,
    });
  }
);

const getCourseById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CourseService.getCourseById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course fetched successfully',
      data: result,
    });
  }
);

const updateCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CourseService.updateCourse(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course updated successfully',
      data: result,
    });
  }
);

const deleteCourse: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CourseService.deleteCourse(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Course deleted successfully',
      data: result,
    });
  }
);

export const CourseController = {
  createCourse,
  getAllCourse,
  getCourseById,
  updateCourse,
  deleteCourse,
};
