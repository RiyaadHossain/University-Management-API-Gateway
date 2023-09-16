import { RequestHandler } from 'express';
import { AcademicSemesterServices } from './service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';

const insertIntoDB: RequestHandler = async (req, res, next) => {
  console.log('hello');
  try {
    const result = await AcademicSemesterServices.insertIntoDB(req);
    console.log({ result });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester created successfully',
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterControllers = { insertIntoDB };
