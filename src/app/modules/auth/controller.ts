import { RequestHandler } from 'express';
import { AuthenticationService } from './service';
import sendResponse from '../../../shared/response';
import config from '../../../config';
import httpStatus from 'http-status';

const logIn: RequestHandler = async (req, res, next) => {
  try {
    const result = await AuthenticationService.logIn(req);
    const { refreshToken, ...restData } = result.data;

    // Set Cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User logged in successfully',
      data: restData
    });
  } catch (error) {
    next(error);
  }
};

const refreshToken: RequestHandler = async (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    const result = await AuthenticationService.refreshToken(req);

    // Set Cookie
    const cookieOptions = {
      secure: config.env === 'production',
      httpOnly: true
    };

    res.cookie('refreshToken', refreshToken, cookieOptions);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const changePassowrd: RequestHandler = async (req, res, next) => {
  try {
    const result = await AuthenticationService.changePassowrd(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AuthController = { logIn, refreshToken, changePassowrd };
