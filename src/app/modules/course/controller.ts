import { RequestHandler } from 'express';
import { CourseServices } from './service';
import sendResponse from '../../../shared/response';

const insertIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.deleteOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const assignFaculties: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.assignFaculties(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const removeFaculties: RequestHandler = async (req, res, next) => {
  try {
    const result = await CourseServices.removeFaculties(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const CourseControllers = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneInDB,
  assignFaculties,
  removeFaculties
};
