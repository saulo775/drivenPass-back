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

export async function selectNotes(req: Request, res: Response) {
    const { noteId } = req.query;
    const userId = res.locals.userId;

    if (noteId) {
        const uniqueNote = await notesService.oneNote(+noteId, userId)
        return res.status(200).json(uniqueNote);
    }else{
        const allNotes = await notesService.allNotes(userId);
        return res.send(allNotes);
    }
}