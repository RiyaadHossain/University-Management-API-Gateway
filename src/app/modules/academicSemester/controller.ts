import { RequestHandler } from 'express';
import { AcademicSemesterServices } from './service';
import sendResponse from '../../../shared/response';

const insertIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterServices.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterServices.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterServices.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterServices.deleteOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterControllers = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneInDB
};
