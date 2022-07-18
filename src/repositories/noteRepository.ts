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

// async function findById(credentialId: number) {
//     const credential = await prisma.credentials.findUnique({
//         where: {
//             id: credentialId,
//         }
//     });

//     return credential;
// }

// async function findAll(userId:number) {
//     const credentials = await prisma.credentials.findMany({
//         where: {
//             userId: userId
//         }
//     });
    
//     return credentials;
// }

// async function removeById(credentialId: number) {
//     await prisma.credentials.delete({
//         where: {
//             id: credentialId,
//         }
//     })
// }

const noteRepository = {
    findByType,
    insertNote,
}

export default noteRepository;