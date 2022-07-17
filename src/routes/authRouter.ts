import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import { validateAuthData } from "../middlewares/authMiddleware.js";

const authRouter = Router();
authRouter.use(validateAuthData);
authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);


export default authRouter;