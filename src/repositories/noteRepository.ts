import { Notes } from '@prisma/client';
import { ICreateNotesData } from './../services/notesService.js';
import prisma from "../config/database.js";

async function findByType(title:string, userId: number) {
    const note = await prisma.notes.findUnique({
        where: {
            userId_title: {
                userId: userId,
                title: title,
            }
        }
    });

    return note;
}

async function insertNote(noteData: ICreateNotesData) {
    const note = await prisma.notes.create({data: noteData});   
    return note;
}

async function findById(noteId: number) {
    const note = await prisma.notes.findUnique({
        where: {
            id: noteId,
        }
    });

    return note;
}

async function findAll(userId:number) {
    const notes = await prisma.notes.findMany({
        where: {
            userId: userId
        }
    });
    
    return notes;
}

// async function removeById(noteId: number) {
//     await prisma.notes.delete({
//         where: {
//             id: noteId,
//         }
//     })
// }

const noteRepository = {
    findByType,
    insertNote,
    findById,
    findAll,
}

export default noteRepository;