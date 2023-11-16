import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ChapterService } from './chapter.service';

const createChapter: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ChapterService.createChapter(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Chapter created successfully',
      data: result,
    });
  }
);

const getAllChapter: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ChapterService.getAllChapter();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Chapters fetched successfully',
      data: result,
    });
  }
);

const getChapterById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ChapterService.getChapterById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Chapter fetched successfully',
      data: result,
    });
  }
);

const updateChapter: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ChapterService.updateChapter(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Chapter updated successfully',
      data: result,
    });
  }
);

const deleteChapter: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ChapterService.deleteChapter(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Chapter deleted successfully',
      data: result,
    });
  }
);

const lastchapter: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ChapterService.lastchapter(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'last chapter fetched successfully',
      data: result,
    });
  }
);

const reorderChapter = catchAsync(async (req: Request, res: Response) => {
  const result = await ChapterService.reorderChapter(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Chapter reordered successfully',
    data: result,
  });
});

export const ChapterController = {
  createChapter,
  getAllChapter,
  getChapterById,
  updateChapter,
  deleteChapter,
  lastchapter,
  reorderChapter,
};
