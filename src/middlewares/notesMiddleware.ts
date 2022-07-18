import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";
import notesSchema from "../schemas/notesSchema.js";

export function validateNotesData(req: Request, res: Response, next: NextFunction){
    const note = notesSchema.validate(req.body);

    if (note.error) {
        throw new AppError("Some incorrect or missing note input", 422);
    }
    next();
} 