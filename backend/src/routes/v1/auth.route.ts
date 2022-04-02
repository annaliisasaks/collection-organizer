import express from "express";
import { authController } from "../../controllers"

const router = express.Router();

router.post("/google", authController.authenticate);

export default router;