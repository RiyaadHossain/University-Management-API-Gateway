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
    const userData = UserValidation.createUser.parse(JSON.parse(req.body.data));
    req.body = userData;
    UserController.createStudent(req, res, next);
  }
);

export const UserRoutes = router;
