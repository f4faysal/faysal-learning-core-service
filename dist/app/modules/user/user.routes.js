"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get('/user/list', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.getAllFromDB);
router.get('/user/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.getByIdFromDB);
router.patch('/superadmin/user/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.updateAdminRoles);
router.delete('/user/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.deleteFromDB);
router.patch('/user/profile', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.updateIntoDB);
router.get('/profile', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN, user_1.ENUM_USER_ROLE.USER, user_1.ENUM_USER_ROLE.SUPER_ADMIN), user_controller_1.UserController.getProfile);
exports.UserRouter = router;
