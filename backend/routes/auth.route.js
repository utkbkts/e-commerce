import express from "express";
import authController from "../controllers/auth.controller.js";
import { isAuthenticatedUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", authController.SignUp);
router.post("/login", authController.Login);
router.post("/logout", authController.Logout);
router.get("/profile", isAuthenticatedUser, authController.getProfile);

export default router;
