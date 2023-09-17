import express from 'express';
import { StudentEnrolledCourseControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseValidation } from './validation';

const route = express.Router();

route.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(StudentEnrolledCourseValidation.create),
  StudentEnrolledCourseControllers.insertIntoDB
);

route.get('/', StudentEnrolledCourseControllers.getAllFromDB);

route.get('/:id', StudentEnrolledCourseControllers.getSingleFromDB);

route.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(StudentEnrolledCourseValidation.update),
  StudentEnrolledCourseControllers.updateOneIntoDB
);

route.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentEnrolledCourseControllers.deleteOneInDB
);

export const StudentEnrolledCourseRoutes = route;
