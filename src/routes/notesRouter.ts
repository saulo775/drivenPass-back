import { Router } from "express";
import { createNotes } from "../controllers/notesController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateNotesData } from "../middlewares/notesMiddleware.js";

const notesRouter = Router();
notesRouter.use(validateToken);

notesRouter.post("/notes",validateNotesData, createNotes);

export default notesRouter;