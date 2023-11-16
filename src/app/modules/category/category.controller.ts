import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CategoryService } from './category.service';

const createCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryService.createCategory(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category created successfully',
      data: result,
    });
  }
);

const getAllCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryService.getAllCategory();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category fetched successfully',
      data: result,
    });
  }
);

export const CategoryController = {
  createCategory,
  getAllCategory,
};
