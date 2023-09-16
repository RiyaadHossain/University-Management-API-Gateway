import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request) => {
  const data: IGenericResponse = await CoreService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getAllFromDB = async (req: Request) => {
  const data: IGenericResponse = await CoreService.get('/academic-semesters', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getSingleFromDB = async (req: Request) => {
  const { id } = req.params;
  const data: IGenericResponse = await CoreService.get(`/academic-semesters/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const updateOneIntoDB = async (req: Request) => {
  const { id } = req.params;
  const data: IGenericResponse = await CoreService.patch(`/academic-semesters/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const deleteOneInDB = async (req: Request) => {
  const { id } = req.params;
  const data: IGenericResponse = await CoreService.delete(`/academic-semesters/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

export const AcademicSemesterServices = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneInDB
};
