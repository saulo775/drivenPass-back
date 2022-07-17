import { Credentials } from "@prisma/client";
import { AppError } from "../errors/AppError.js";
import credentialRepository from "../repositories/credentialRepository.js";

export type ICreateCredentialData = Omit<Credentials, "id">

async function createNewCredential(credentialData: ICreateCredentialData) {
    const {title, userId } = credentialData;
    await checkIfCanSaveCredential(title, userId);
    const credential = await credentialRepository.insertCredential(credentialData);
    return credential;
}

async function checkIfCanSaveCredential(title: string, userId: number) {
    const credential = await credentialRepository.findByType(title, userId);

    if (credential) {
        throw new AppError("Already exists one credential with this name", 409);
        
    }
}


const credentialService = {
    createNewCredential,
}

export default credentialService