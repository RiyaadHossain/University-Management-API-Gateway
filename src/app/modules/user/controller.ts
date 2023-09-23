import { RequestHandler } from 'express';
import { UserService } from './service';
import sendResponse from '../../../shared/response';

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createFaculty: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.createFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createAdmin: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserService.createAdmin(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = { createStudent, createFaculty, createAdmin };
