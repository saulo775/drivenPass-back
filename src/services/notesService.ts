import { Notes } from "@prisma/client";
import { AppError } from "../errors/AppError.js";
import noteRepository from "../repositories/noteRepository.js";

export type ICreateNotesData = Omit<Notes, "id">

async function createNewNote(noteData: ICreateNotesData) {
    let { title, userId } = noteData;

    await checkIfCanSaveNote(title, userId);
    const note = await noteRepository.insertNote(noteData);
    return note;
}

async function checkIfCanSaveNote(title: string, userId: number) {
    const note = await noteRepository.findByType(title, userId);
    if (note) {
        throw new AppError("Already exists one note with this name", 409);
    }
}

async function oneNote(noteId: number, userId: number){
    const note = await noteRepository.findById(noteId);
    if (!note) {
        throw new AppError("Note not found", 404);
    }

    if (note.userId !== userId) {
        throw new AppError("This note is not yours", 403);
    }

    return note;
}

async function allNotes(userId: number){
    const notes = await noteRepository.findAll(userId);
    if (!notes) {
        throw new AppError("Note not found", 404);
    }
    return notes;
}

// async function deleteNote(credentialId: number, userId: number) {
//     const credential = await credentialRepository.findById(credentialId);
//     if (!credential) {
//         throw new AppError("Note not found", 404);
//     }

//     if (credential.userId !== userId) {
//         throw new AppError("Note is not this user", 403);
//     }

//     await credentialRepository.removeById(credentialId);
// }

const notesService = {
    createNewNote,
    oneNote,
    allNotes
}

export default notesService