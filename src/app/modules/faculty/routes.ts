import express from 'express';
import { FacultyController } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FacultyValidation } from './validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.get(
  '/',
  FacultyController.getAllFromDB
);

router.get(
  '/:id',
  FacultyController.getSingleFromDB
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(FacultyValidation.updateFaculty),
  FacultyController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FacultyController.deleteOneInDB
);

export const FacultyRoutes = router;
