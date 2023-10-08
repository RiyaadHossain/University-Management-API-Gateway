import express from 'express';
import { StudentSemesterPaymentControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const route = express.Router();

route.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY),
  StudentSemesterPaymentControllers.getAllFromDB
);

export const StudentSemesterPaymentRoutes = route;
