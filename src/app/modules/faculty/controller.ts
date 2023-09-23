import { RequestHandler } from 'express';
import { FacultyService } from './service';
import sendResponse from '../../../shared/response';

const updateOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await FacultyService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyController = { updateOneInDB };
