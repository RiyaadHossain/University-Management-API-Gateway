import express from 'express';
import { SemesterRegistrationControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationValidation } from './validation';

const route = express.Router();

route.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(SemesterRegistrationValidation.create),
  SemesterRegistrationControllers.insertIntoDB
);

route.get('/', SemesterRegistrationControllers.getAllFromDB);

route.get('/get-my-registration', SemesterRegistrationControllers.getMyRegistration);
route.get('/get-my-semsester-courses', SemesterRegistrationControllers.getMySemesterRegCourses);

route.get('/:id', SemesterRegistrationControllers.getSingleFromDB);

route.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(SemesterRegistrationValidation.update),
  SemesterRegistrationControllers.updateOneIntoDB
);

route.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationControllers.deleteOneInDB
);

route.post(
  '/start-my-registration',
  auth(ENUM_USER_ROLE.STUDENT),
  validateRequest(SemesterRegistrationValidation.startMyRegistration),
  SemesterRegistrationControllers.startMyRegistration
);

route.post(
  '/enroll-into-course',
  auth(ENUM_USER_ROLE.STUDENT),
  validateRequest(SemesterRegistrationValidation.enrollAndWithdraw),
  SemesterRegistrationControllers.enrollIntoCourse
);

route.post(
  '/withdraw-from-course',
  auth(ENUM_USER_ROLE.STUDENT),
  validateRequest(SemesterRegistrationValidation.enrollAndWithdraw),
  SemesterRegistrationControllers.withdrawFromCourse
);

route.post(
  '/confirm-my-registration',
  auth(ENUM_USER_ROLE.STUDENT),
  SemesterRegistrationControllers.confirmMyRegistration
);

route.post(
  '/:semesterRegId/start-new-registration',
  auth(ENUM_USER_ROLE.ADMIN),
  SemesterRegistrationControllers.startNewRegistration
);

export const SemesterRegistrationRoutes = route;
