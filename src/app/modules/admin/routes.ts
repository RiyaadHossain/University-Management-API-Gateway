import express from 'express';
import { AdminController } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { AdminValidation } from './validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

router.get('/', AdminController.getAllFromDB);

router.get('/:id', AdminController.getSingleFromDB);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(AdminValidation.updateAdmin),
  AdminController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AdminController.deleteOneInDB
);

export const AdminRoutes = router;
