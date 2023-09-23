import { Request } from 'express';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request) => {
  const data: IGenericResponse = await AuthService.post(req.originalUrl, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getAllFromDB = async (req: Request) => {
  const data: IGenericResponse = await AuthService.get(req.originalUrl, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getSingleFromDB = async (req: Request) => {
  const data: IGenericResponse = await AuthService.get(req.originalUrl, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const updateOneIntoDB = async (req: Request) => {
  const data: IGenericResponse = await AuthService.patch(req.originalUrl, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const deleteOneInDB = async (req: Request) => {
  const data: IGenericResponse = await AuthService.delete(req.originalUrl, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

export const DepartmentManagementServices = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneInDB
};
