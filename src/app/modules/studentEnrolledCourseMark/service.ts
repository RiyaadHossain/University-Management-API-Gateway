import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const myMarks = async (req: Request) => {
  const data: IGenericResponse = await CoreService.post(req.baseUrl, req.body, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const updateStudentMarks = async (req: Request) => {
  const data: IGenericResponse = await CoreService.post(req.baseUrl, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

const updateFinalMarks = async (req: Request) => {
  const data: IGenericResponse = await CoreService.post(req.baseUrl, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

export const StudentEnrolledCourseMarkServices = {
  myMarks,
  updateStudentMarks,
  updateFinalMarks
};
