import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { AuthService } from '../../../shared/axios';

const updateOneInDB = async (req: Request) => {
  const result: IGenericResponse = await AuthService.patch(req.baseUrl, req.body, {
    withCredentials: true
  });

  return result
};

export const FacultyService = { updateOneInDB };
