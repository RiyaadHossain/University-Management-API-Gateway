import { RequestHandler } from 'express';
import { AdminService } from './service';
import sendResponse from '../../../shared/response';

const getAllFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AdminService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFromDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AdminService.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AdminService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneInDB: RequestHandler = async (req, res, next) => {
  try {
    const result = await AdminService.deleteOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AdminController = { getAllFromDB, getSingleFromDB, updateOneInDB, deleteOneInDB };
