import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PurchaseService } from './purchase.service';

const createPurchase: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PurchaseService.createPurchase(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Purchase created successfully',
      data: result,
    });
  }
);

const getAllPurchase: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PurchaseService.getAllPurchase();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Purchases fetched successfully',
      data: result,
    });
  }
);

const getPurchaseById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PurchaseService.getPurchaseById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Purchase fetched successfully',
      data: result,
    });
  }
);

const updatePurchase: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PurchaseService.updatePurchase(
      req.params.id,
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Purchase updated successfully',
      data: result,
    });
  }
);

const deletePurchase: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PurchaseService.deletePurchase(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Purchase deleted successfully',
      data: result,
    });
  }
);

export const PurchaseController = {
  createPurchase,
  getAllPurchase,
  getPurchaseById,
  updatePurchase,
  deletePurchase,
};
