import express from 'express';
import { AcademicSemesterControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const route = express.Router();

route.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicSemesterControllers.insertIntoDB
);

export const AcademicSemesterRoutes = route;
