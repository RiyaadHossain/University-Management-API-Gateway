import express from 'express';
import { AcademicFacultyControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './validation';

const route = express.Router();

route.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AcademicFacultyValidation.create),
  AcademicFacultyControllers.insertIntoDB
);

route.get('/', AcademicFacultyControllers.getAllFromDB);

route.get('/:id', AcademicFacultyControllers.getSingleFromDB);

route.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AcademicFacultyValidation.update),
  AcademicFacultyControllers.updateOneIntoDB
);

route.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AcademicFacultyControllers.deleteOneInDB
);

export const AcademicFacultyRoutes = route;
