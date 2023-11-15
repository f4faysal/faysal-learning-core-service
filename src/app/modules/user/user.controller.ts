import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { userFilterableFields } from './user.contants';
import { UserService } from './user.service';

const getAllFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, userFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await UserService.getAllFromDB(filters, options);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User fetched successfully',
      meta: result.meta,
      data: result.data,
    });
  }
);

const getByIdFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await UserService.getByIdFromDB(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User fetched successfully',
      data: result,
    });
  }
);

const updateIntoDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.user as { userId: string };
    const result = await UserService.updateIntoDB(userId, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Profile updated successfully',
      data: result,
    });
  }
);

const deleteFromDB: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.user as { userId: string };

    const id = req.params.id;
    const result = await UserService.deleteFromDB(id, userId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User deleted successfully',
      data: result,
    });
  }
);

const getProfile: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    // Retrieve the user's _id & role from the access token
    const { userId } = req.user as { userId: string };

    const result = await UserService.getProfile(userId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Profile fetched successfully',
      data: result,
    });
  }
);

const updateAdminRoles: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await UserService.updateAdminRoles(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Updated successfully',
      data: result,
    });
  }
);

export const UserController = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  getProfile,
  updateAdminRoles,
};
