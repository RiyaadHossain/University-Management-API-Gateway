import express from 'express';
import { SemesterPaymentControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterPaymentValidation } from './validation';

const route = express.Router();

route.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(SemesterPaymentValidation.create),
  SemesterPaymentControllers.insertIntoDB
);

route.get('/', SemesterPaymentControllers.getAllFromDB);

route.get('/:id', SemesterPaymentControllers.getSingleFromDB);

route.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(SemesterPaymentValidation.update),
  SemesterPaymentControllers.updateOneIntoDB
);

route.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterPaymentControllers.deleteOneInDB
);

export const SemesterPaymentRoutes = route;
