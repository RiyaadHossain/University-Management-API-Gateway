import httpStatus from 'http-status';
import { verify } from 'jsonwebtoken';
import config from '../config';
import ApiError from '../errors/apiError';

const verifyToken = (token: string) => {
    const isVerified = verify(token, config.jwt.secret);
    return isVerified as any;
};

export const JwtHelper = {
  verifyToken
};
