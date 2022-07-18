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

// async function oneCredential(credentialId: number, userId: number){
//     const credential = await credentialRepository.findById(credentialId);
//     if (!credential) {
//         throw new AppError("Credential not found", 404);
//     }

//     if (credential.userId !== userId) {
//         throw new AppError("This credential is not yours", 403);
//     }

//     credential.password = await decryptPassword(credential.password);
//     return credential;
// }

// async function allCredentials(userId: number){
//     const credentials = await credentialRepository.findAll(userId);
//     if (!credentials) {
//         throw new AppError("Credential not found", 404);
//     }
//     return credentials;
// }

// async function deleteCredential(credentialId: number, userId: number) {
//     const credential = await credentialRepository.findById(credentialId);
//     if (!credential) {
//         throw new AppError("Credential not found", 404);
//     }

//     if (credential.userId !== userId) {
//         throw new AppError("Credential is not this user", 403);
//     }

//     await credentialRepository.removeById(credentialId);
// }

const notesService = {
    createNewNote
}

export default notesService