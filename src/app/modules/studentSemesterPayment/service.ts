import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const getAllFromDB = async (req: Request) => {
  const data: IGenericResponse = await CoreService.get(req.baseUrl, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

export const StudentSemesterPaymentServices = {
  getAllFromDB
};
