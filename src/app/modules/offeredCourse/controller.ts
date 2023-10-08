import { RequestHandler } from 'express';
import { OfferedCourseServices } from './service';
import sendResponse from '../../../shared/response';

const insertIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseServices.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseServices.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseServices.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await OfferedCourseServices.deleteOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseControllers = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneInDB
};
