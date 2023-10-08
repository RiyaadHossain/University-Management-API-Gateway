import express from 'express';
import { AcademicDepartmentControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './validation';

const route = express.Router();

route.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AcademicDepartmentValidation.create),
  AcademicDepartmentControllers.insertIntoDB
);

route.get('/', AcademicDepartmentControllers.getAllFromDB);

route.get('/:id', AcademicDepartmentControllers.getSingleFromDB);

route.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AcademicDepartmentValidation.update),
  AcademicDepartmentControllers.updateOneIntoDB
);

route.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicDepartmentControllers.deleteOneInDB
);

export const AcademicDepartmentRoutes = route;
