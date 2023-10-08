import { RequestHandler } from 'express';
import { OfferedCourseClassScheduleServices } from './service';
import sendResponse from '../../../shared/response';

const insertIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseClassScheduleServices.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseClassScheduleServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseClassScheduleServices.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseClassScheduleServices.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseClassScheduleServices.deleteOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseClassScheduleControllers = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneInDB
};
