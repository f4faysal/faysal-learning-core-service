import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { StripeCustomerService } from './stripeCustomer.service';

const createStripeCustomer: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await StripeCustomerService.createStripeCustomer(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StripeCustomer created successfully',
      data: result,
    });
  }
);

const getAllStripeCustomer: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await StripeCustomerService.getAllStripeCustomer();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StripeCustomers fetched successfully',
      data: result,
    });
  }
);

const getStripeCustomerById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await StripeCustomerService.getStripeCustomerById(
      req.params.id
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StripeCustomer fetched successfully',
      data: result,
    });
  }
);

const updateStripeCustomer: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await StripeCustomerService.updateStripeCustomer(
      req.params.id,
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StripeCustomer updated successfully',
      data: result,
    });
  }
);

const deleteStripeCustomer: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await StripeCustomerService.deleteStripeCustomer(
      req.params.id
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'StripeCustomer deleted successfully',
      data: result,
    });
  }
);

export const StripeCustomerController = {
  createStripeCustomer,
  getAllStripeCustomer,
  getStripeCustomerById,
  updateStripeCustomer,
  deleteStripeCustomer,
};
