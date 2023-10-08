import { RequestHandler } from 'express';
import { SemesterRegistrationServices } from './service';
import sendResponse from '../../../shared/response';

const insertIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMyRegistration: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.getMyRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMySemesterRegCourses: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.getMySemesterRegCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.deleteOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const startMyRegistration: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.startMyRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const enrollIntoCourse: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.enrollIntoCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const withdrawFromCourse: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.withdrawFromCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const confirmMyRegistration: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.confirmMyRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const startNewRegistration: RequestHandler = async (req, res, next) => {
  try {
    const result = await SemesterRegistrationServices.startNewRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const SemesterRegistrationControllers = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneInDB,
  getMyRegistration,
  getMySemesterRegCourses,
  startMyRegistration,
  enrollIntoCourse,
  withdrawFromCourse,
  confirmMyRegistration,
  startNewRegistration
};
