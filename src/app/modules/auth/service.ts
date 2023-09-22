import { Request } from 'express';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const logIn = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post(req.originalUrl, req.body, {
    headers: { Authorization: req.headers.authorization }
  });

  return response;
};

const refreshToken = async (req: Request) => {
  const { refreshToken } = req.cookies;
  const response: IGenericResponse = await AuthService.post(req.originalUrl, req.body, {
    headers: {
      Cookie: `refreshToken=${refreshToken}`
    }
  });

  return response;
};

const changePassowrd = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await AuthService.post(req.originalUrl, req.body, {
    headers: { Authorization: req.headers.authorization }
  });

  return response;
};

export const AuthenticationService = { logIn, refreshToken, changePassowrd };
