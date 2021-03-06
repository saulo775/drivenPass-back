import { Router } from "express";
import { 
    createNotes, 
    removeNotes, 
    selectNotes
} from "../controllers/notesController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateNotesData } from "../middlewares/notesMiddleware.js";

const notesRouter = Router();
notesRouter.use(validateToken);

notesRouter.post("/notes",validateNotesData, createNotes);
notesRouter.get("/notes", selectNotes);
notesRouter.delete("/notes/:noteId", removeNotes);

export default notesRouter;