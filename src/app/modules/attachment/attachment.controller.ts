import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AttachmentService } from './attachment.service';

const createAttachment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AttachmentService.createAttachment(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Attachment created successfully',
      data: result,
    });
  }
);

const getAllAttachment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AttachmentService.getAllAttachment();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Attachments fetched successfully',
      data: result,
    });
  }
);

const getAttachmentById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AttachmentService.getAttachmentById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Attachment fetched successfully',
      data: result,
    });
  }
);

const updateAttachment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AttachmentService.updateAttachment(
      req.params.id,
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Attachment updated successfully',
      data: result,
    });
  }
);

const deleteAttachment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AttachmentService.deleteAttachment(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Attachment deleted successfully',
      data: result,
    });
  }
);

export const AttachmentController = {
  createAttachment,
  getAllAttachment,
  getAttachmentById,
  updateAttachment,
  deleteAttachment,
};
