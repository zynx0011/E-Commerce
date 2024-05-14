import { Router } from "express";

import {
  UpdateUserRole,
  adminLogin,
  deleteUser,
  getAllUsers,
} from "../controllers/admin.controller.js";
import { adminVerify } from "../middlewares/admin.middleware.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(adminLogin);
router.route("/get-all-users").get(verifyjwt, adminVerify, getAllUsers);
router
  .route("/UpdateUserRole/:id")
  .patch(verifyjwt, adminVerify, UpdateUserRole);
router.route("/DeleteUser/:id").delete(verifyjwt, adminVerify, deleteUser);

export default router;
