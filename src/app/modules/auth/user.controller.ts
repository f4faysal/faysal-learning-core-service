import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const registerUSer: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.registerUSer(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  }
);
const addNewAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.addNewAdmin(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  }
);
const addNewUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.addNewUser(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  }
);
const loginUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...loginData } = req.body;

    const result = await UserService.loginUser(loginData);

    // set refresh token into cookie

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'User logged in successfully !',
      accessToken: result,
    });
  }
);

export const UserController = {
  registerUSer,
  loginUser,
  addNewAdmin,
  addNewUser,
};
