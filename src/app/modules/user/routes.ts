import express from 'express';
import { UserController } from './controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { UserValidation } from './validation';
import { FileUploader } from '../../../helpers/FileUploadeHelper';
const router = express.Router();

router.post(
  '/create-student',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FileUploader.upload.single('profileImage'),
  async (req, res, next) => {
    try {
      const userData = UserValidation.createUser.parse(JSON.parse(req.body.data));
      req.body = userData;
      UserController.createStudent(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/create-faculty',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FileUploader.upload.single('profileImage'),
  async (req, res, next) => {
    try {
      const userData = UserValidation.createFaculty.parse(JSON.parse(req.body.data));
      req.body = userData;
      UserController.createFaculty(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/create-admin',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  FileUploader.upload.single('profileImage'),
  async (req, res, next) => {
    try {
      const userData = UserValidation.createAdmin.parse(JSON.parse(req.body.data));
      req.body = userData;
      UserController.createAdmin(req, res, next);
    } catch (error) {
      next(error);
    }
  }
);

export const UserRoutes = router;
