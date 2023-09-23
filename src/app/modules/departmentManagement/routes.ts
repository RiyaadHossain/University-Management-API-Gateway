import express from 'express';
import { DepartmentManagementControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { DepartmentManagementValidation } from './validation';

const route = express.Router();

route.post(
  '/create-department-management',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(DepartmentManagementValidation.create),
  DepartmentManagementControllers.insertIntoDB
);

route.get('/', DepartmentManagementControllers.getAllFromDB);

route.get('/:id', DepartmentManagementControllers.getSingleFromDB);

route.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(DepartmentManagementValidation.update),
  DepartmentManagementControllers.updateOneIntoDB
);

route.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  DepartmentManagementControllers.deleteOneInDB
);

export const DepartmentManagementRoutes = route;
