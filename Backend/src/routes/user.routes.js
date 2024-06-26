import { Router } from "express";
import {
  changeCurrentUserPassword,
  getCurrentUser,
  loginUser,
  logoutuser,
  refreshAccessToken,
  registerUser,
  updateAccoutDetails,
  updateUserName,
  google,
  deleteAccount,
  getUser,
  forgotPassword,
  changeforgotPassword,
  resetPassword,
} from "../controllers/user.controller.js";
import { verifyjwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/Signup").post(registerUser);

router.route("/SignIn").post(loginUser);

router.post("/google", google);

router.route("/logout").get(verifyjwt, logoutuser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(verifyjwt, changeCurrentUserPassword);

router.route("/current-user").get(verifyjwt, getCurrentUser);

// router.route("/update-username").patch(verifyjwt, updateUserName);

router.route("/update-account/:id").post(verifyjwt, updateAccoutDetails); // patch is used for single update

router.route("/delete-account/:id").delete(verifyjwt, deleteAccount);

router.route("/:id").get(verifyjwt, getUser);

router.route("/forgotPassword").post(forgotPassword);
router.route("/reset-password/:id/:token").get(resetPassword);
router.route("/reset-password/:userId/:token").post(changeforgotPassword);

// routes for video

export default router;
