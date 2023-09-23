import express from 'express';
import { FacultyController } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FacultyValidation } from './validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.patch(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(FacultyValidation.updateFaculty),
  FacultyController.updateOneInDB
);

export const UserRoutes = router;
