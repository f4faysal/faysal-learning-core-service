import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { MuxDataService } from './muxData.service';

const createMuxData: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MuxDataService.createMuxData(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'MuxData created successfully',
      data: result,
    });
  }
);

const getAllMuxData: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MuxDataService.getAllMuxData();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'MuxDatas fetched successfully',
      data: result,
    });
  }
);

const getMuxDataById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MuxDataService.getMuxDataById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'MuxData fetched successfully',
      data: result,
    });
  }
);

const updateMuxData: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MuxDataService.updateMuxData(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'MuxData updated successfully',
      data: result,
    });
  }
);

const deleteMuxData: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await MuxDataService.deleteMuxData(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'MuxData deleted successfully',
      data: result,
    });
  }
);

export const MuxDataController = {
  createMuxData,
  getAllMuxData,
  getMuxDataById,
  updateMuxData,
  deleteMuxData,
};
