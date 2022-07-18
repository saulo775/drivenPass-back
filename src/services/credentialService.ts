import { Credentials } from "@prisma/client";
import { AppError } from "../errors/AppError.js";
import credentialRepository from "../repositories/credentialRepository.js";
import { encryptPassword, decryptPassword } from "../utils/passwordUtil.js";

import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.KEY_CRYPTR);

export type ICreateCredentialData = Omit<Credentials, "id">

async function createNewCredential(credentialData: ICreateCredentialData) {
    let {title, userId, password } = credentialData;
    credentialData.password = await encryptPassword(password);
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

async function oneCredential(credentialId: number, userId: number){
    const credential = await credentialRepository.findById(credentialId);
    if (!credential) {
        throw new AppError("Credential not found", 404);
    }

    if (credential.userId !== userId) {
        throw new AppError("This credential is not yours", 403);
    }

    credential.password = await decryptPassword(credential.password);
    return credential;
}

async function allCredentials(userId: number){
    const credentials = await credentialRepository.findAll(userId);
    if (!credentials) {
        throw new AppError("Credential not found", 404);
    }
    return credentials;
}


const credentialService = {
    createNewCredential,
    oneCredential,
    allCredentials,
}

export default credentialService