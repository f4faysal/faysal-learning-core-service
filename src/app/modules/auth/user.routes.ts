import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { userValidation } from './user.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(userValidation.create),
  UserController.registerUSer
);
router.post(
  '/superadmin/user',
  validateRequest(userValidation.create),
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.addNewAdmin
);
router.post(
  '/admin/users',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.addNewUser
);
router.post('/login', UserController.loginUser);

export const AuthRouter = router;
