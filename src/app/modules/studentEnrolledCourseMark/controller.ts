import { RequestHandler } from 'express';
import { StudentEnrolledCourseMarkServices } from './service';
import sendResponse from '../../../shared/response';

const myMarks: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentEnrolledCourseMarkServices.myMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateStudentMarks: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentEnrolledCourseMarkServices.updateStudentMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateFinalMarks: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentEnrolledCourseMarkServices.updateFinalMarks(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentEnrolledCourseMarkControllers = {
  myMarks,
  updateStudentMarks,
  updateFinalMarks
};
