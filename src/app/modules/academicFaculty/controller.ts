import { RequestHandler } from 'express';
import { AcademicFacultyServices } from './service';
import sendResponse from '../../../shared/response';

const insertIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyServices.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyServices.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyServices.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyServices.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyServices.deleteOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyControllers = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneInDB
};
