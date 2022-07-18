import { Credentials } from '@prisma/client';
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
    return credential;
}

async function findById(credentialId: number) {
    const credential = await prisma.credentials.findUnique({
        where: {
            id: credentialId,
        }
    });

    return credential;
}

async function findAll(userId:number) {
    const credentials = await prisma.credentials.findMany({
        where: {
            userId: userId
        }
    });
    
    return credentials;
}

const credentialRepository = {
    findByType,
    insertCredential,
    findById,
    findAll
}

export default credentialRepository;