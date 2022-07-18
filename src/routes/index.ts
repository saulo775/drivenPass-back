import { Router } from "express";
import authRouter from "./authRouter.js";
import credentialRouter from "./credentialRouter.js";
import notesRouter from "./notesRouter.js";
import cardRouter from "./cardRouter.js";
import wifiRouter from "./wifiRouter.js";

const routes = Router();
routes.use(authRouter);
routes.use(credentialRouter);
routes.use(notesRouter);
routes.use(cardRouter);
routes.use(wifiRouter);

export default routes;