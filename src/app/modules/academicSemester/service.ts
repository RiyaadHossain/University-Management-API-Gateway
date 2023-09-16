import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const insertIntoDB = async (req: Request) => {
  const data = await CoreService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return data;
};

export const AcademicSemesterServices = { insertIntoDB };
