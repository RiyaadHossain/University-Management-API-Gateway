import express from 'express';
import { StudentController } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { StudentValidation } from './validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.get('/', StudentController.getAllFromDB);

router.get(
  '/get-my-courses-schedules',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentController.getMyCoursesSchedules
);

router.get('/get-my-courses', auth(ENUM_USER_ROLE.STUDENT), StudentController.getMyCourses);

router.get(
  '/get-my-acadmic-info',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentController.getMyAcademicInfo
);

router.get('/:id', StudentController.getSingleFromDB);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(StudentValidation.updateStudent),
  StudentController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.deleteOneInDB
);

export const StudentRoutes = router;
