import { Router } from "express";
import * as auth_controller from "../controllers/auth.controller";
import { verifyToken } from '../controllers/auth.controller'
const router = Router();

router.post("/verify", verifyToken, auth_controller.successfulToken);
router.post("/login",auth_controller.login)
module.exports = router;