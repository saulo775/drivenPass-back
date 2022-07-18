import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialRouter from "./credentialRouter.js";
import notesRouter from "./notesRouter.js";

const routes = Router();
routes.use(authRouter);
routes.use(credentialRouter);
routes.use(notesRouter);

export default routes;