import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request) => {
  const data: IGenericResponse = await CoreService.post(req.baseUrl, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getMyRegistration = async (req: Request) => {
  const data: IGenericResponse = await CoreService.get(req.baseUrl, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getMySemesterRegCourses = async (req: Request) => {
  const data: IGenericResponse = await CoreService.get(req.baseUrl, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getAllFromDB = async (req: Request) => {
  const data: IGenericResponse = await CoreService.get(req.baseUrl, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const getSingleFromDB = async (req: Request) => {
  const { id } = req.params;
  const url = `${req.baseUrl}/${id}`;
  const data: IGenericResponse = await CoreService.get(url, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const updateOneIntoDB = async (req: Request) => {
  const { id } = req.params;
  const url = `${req.baseUrl}/${id}`;
  const data: IGenericResponse = await CoreService.patch(url, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const deleteOneInDB = async (req: Request) => {
  const { id } = req.params;
  const url = `${req.baseUrl}/${id}`;
  const data: IGenericResponse = await CoreService.delete(url, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const startMyRegistration = async (req: Request) => {
  const { id } = req.params;
  const url = `${req.baseUrl}/${id}`;
  const data: IGenericResponse = await CoreService.delete(url, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const enrollIntoCourse = async (req: Request) => {
  const { id } = req.params;
  const url = `${req.baseUrl}/${id}`;
  const data: IGenericResponse = await CoreService.delete(url, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const withdrawFromCourse = async (req: Request) => {
  const { id } = req.params;
  const url = `${req.baseUrl}/${id}`;
  const data: IGenericResponse = await CoreService.delete(url, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const confirmMyRegistration = async (req: Request) => {
  const { id } = req.params;
  const url = `${req.baseUrl}/${id}`;
  const data: IGenericResponse = await CoreService.delete(url, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const startNewRegistration = async (req: Request) => {
  const { id } = req.params;
  const url = `${req.baseUrl}/${id}`;
  const data: IGenericResponse = await CoreService.delete(url, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

export const SemesterRegistrationServices = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB,
  updateOneIntoDB,
  deleteOneInDB,
  getMyRegistration,
  getMySemesterRegCourses,
  startNewRegistration,
  confirmMyRegistration,
  withdrawFromCourse,
  enrollIntoCourse,
  startMyRegistration
};
