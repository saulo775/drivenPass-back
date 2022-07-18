import { Request, Response } from "express";
import { AppError } from "../errors/AppError.js";
import notesService, { ICreateNotesData } from "../services/notesService.js";

export async function createNotes(req: Request, res: Response) {
    const body = req.body;
    const noteData: ICreateNotesData = {
        ...body,
        userId: res.locals.userId
    }
    await notesService.createNewNote(noteData);

    return res.sendStatus(201);
}