import express from 'express';
import { StudentEnrolledCourseMarkControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { StudentEnrolledCourseMarkValidation } from './validation';

const router = express.Router();

router.get('/my-marks', auth(ENUM_USER_ROLE.STUDENT), StudentEnrolledCourseMarkControllers.myMarks);

router.patch(
  '/update-marks',
  auth(ENUM_USER_ROLE.FACULTY),
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentMarks),
  StudentEnrolledCourseMarkControllers.updateStudentMarks
);

router.patch(
  '/update-final-marks',
  auth(ENUM_USER_ROLE.FACULTY),
  validateRequest(StudentEnrolledCourseMarkValidation.updateStudentCourseFinalMarks),
  StudentEnrolledCourseMarkControllers.updateFinalMarks
);

export const StudentEnrolledCourseMarkRoutes = router;
