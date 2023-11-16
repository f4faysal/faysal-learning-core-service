import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserProgressService } from './userProgress.service';

const createUserProgress: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserProgressService.createUserProgress(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'UserProgress created successfully',
      data: result,
    });
  }
);

const getAllUserProgress: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserProgressService.getAllUserProgress();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'UserProgresss fetched successfully',
      data: result,
    });
  }
);

const getUserProgressById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserProgressService.getUserProgressById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'UserProgress fetched successfully',
      data: result,
    });
  }
);

const updateUserProgress: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserProgressService.updateUserProgress(
      req.params.id,
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'UserProgress updated successfully',
      data: result,
    });
  }
);

const deleteUserProgress: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserProgressService.deleteUserProgress(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'UserProgress deleted successfully',
      data: result,
    });
  }
);

export const UserProgressController = {
  createUserProgress,
  getAllUserProgress,
  getUserProgressById,
  updateUserProgress,
  deleteUserProgress,
};
