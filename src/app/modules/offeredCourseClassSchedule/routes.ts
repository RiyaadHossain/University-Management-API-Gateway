import express from 'express';
import { OfferedCourseClassScheduleControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseClassScheduleValidation } from './validation';

const route = express.Router();

route.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(OfferedCourseClassScheduleValidation.create),
  OfferedCourseClassScheduleControllers.insertIntoDB
);

route.get('/', OfferedCourseClassScheduleControllers.getAllFromDB);

route.get('/:id', OfferedCourseClassScheduleControllers.getSingleFromDB);

route.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(OfferedCourseClassScheduleValidation.update),
  OfferedCourseClassScheduleControllers.updateOneIntoDB
);

route.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseClassScheduleControllers.deleteOneInDB
);

export const OfferedCourseClassScheduleRoutes = route;
