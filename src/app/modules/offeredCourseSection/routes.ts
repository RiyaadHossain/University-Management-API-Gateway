import express from 'express';
import { OfferedCourseSectionControllers } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import { OfferedCourseSectionValidation } from './validation';

const route = express.Router();

route.post(
  '/',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(OfferedCourseSectionValidation.create),
  OfferedCourseSectionControllers.insertIntoDB
);

route.get('/', OfferedCourseSectionControllers.getAllFromDB);

route.get('/:id', OfferedCourseSectionControllers.getSingleFromDB);

route.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(OfferedCourseSectionValidation.update),
  OfferedCourseSectionControllers.updateOneIntoDB
);

route.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  OfferedCourseSectionControllers.deleteOneInDB
);

export const OfferedCourseSectionRoutes = route;
