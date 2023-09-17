import { RequestHandler } from 'express';
import sendResponse from '../../../shared/response';
import { StudentSemesterPaymentServices } from './service';

const getAllFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentSemesterPaymentServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const StudentSemesterPaymentControllers = {
  getAllFromDB
};
