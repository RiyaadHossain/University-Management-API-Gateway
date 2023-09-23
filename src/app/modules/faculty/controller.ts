import { RequestHandler } from 'express';
import { FacultyService } from './service';
import sendResponse from '../../../shared/response';

const getAllFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await FacultyService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await FacultyService.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await FacultyService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await FacultyService.deleteOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyController = { getAllFromDB, getSingleFromDB, updateOneInDB, deleteOneInDB };
