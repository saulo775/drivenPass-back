import { ICreateCredentialData } from './../services/credentialService.js';
import prisma from "../config/database.js";

async function findByType(title:string, userId: number) {
    const credential = await prisma.credentials.findUnique({
        where: {
            userId_title: {
                userId: userId,
                title: title,
            }
        }
    });

    return credential;
}

async function insertCredential(credentialData: ICreateCredentialData) {
    const credential = await prisma.credentials.create({data: credentialData});
    console.log(credential)
    
    return credential;
}

const credentialRepository = {
    findByType,
    insertCredential,
}

export default credentialRepository;