import { RequestHandler } from 'express';
import { StudentService } from './service';
import sendResponse from '../../../shared/response';

const getAllFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCoursesSchedules: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentService.getMyCoursesSchedules(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyCourses: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentService.getMyCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyAcademicInfo: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentService.getMyAcademicInfo(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentService.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentService.deleteOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentController = {
  getAllFromDB,
  getMyCourses,
  getMyCoursesSchedules,
  getMyAcademicInfo,
  getSingleFromDB,
  updateOneInDB,
  deleteOneInDB
};
