import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService, CoreService } from '../../../shared/axios';

const getAllFromDB = async (req: Request) => {
  const result: IGenericResponse = await AuthService.get(req.originalUrl);

  return result;
};

const getMyCoursesSchedules = async (req: Request) => {
  const result: IGenericResponse = await CoreService.get(req.originalUrl, {
    headers: { Authorization: req.headers.authorization }
  });

  return result;
};

const getMyCourses = async (req: Request) => {
  const result: IGenericResponse = await CoreService.get(req.originalUrl, {
    headers: { Authorization: req.headers.authorization }
  });

  return result;
};

const getMyAcademicInfo = async (req: Request) => {
  const result: IGenericResponse = await CoreService.get(req.originalUrl, {
    headers: { Authorization: req.headers.authorization }
  });

  return result;
};

const getSingleFromDB = async (req: Request) => {
  const result: IGenericResponse = await AuthService.get(req.originalUrl);

  return result;
};

const updateOneInDB = async (req: Request) => {
  const result: IGenericResponse = await AuthService.patch(req.originalUrl, req.body, {
    headers: { Authorization: req.headers.authorization }
  });

  return result;
};

const deleteOneInDB = async (req: Request) => {
  const result: IGenericResponse = await AuthService.delete(req.originalUrl, {
    headers: { Authorization: req.headers.authorization }
  });

  return result;
};

export const StudentService = {
  getAllFromDB,
  getMyCoursesSchedules,
  getMyCourses,
  getMyAcademicInfo,
  getSingleFromDB,
  updateOneInDB,
  deleteOneInDB
};
