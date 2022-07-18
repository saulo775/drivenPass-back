import { Request, Response } from "express";
import { AppError } from "../errors/AppError.js";
import credentialService from "../services/credentialService.js";
import { ICreateCredentialData } from "../services/credentialService.js";

export async function createCredential(req: Request, res: Response) {
    const body = req.body;
    const credentialData: ICreateCredentialData = {
        ...body,
        userId: res.locals.userId
    }

    const credential = await credentialService.createNewCredential(credentialData)
    res.status(201).send(credential)
}

export async function selectCredentials(req: Request, res: Response) {
    const { credentialId } = req.query;
    const userId = res.locals.userId;

    if (credentialId) {
        const uniqueCredential = await credentialService.oneCredential(+credentialId, userId)
        return res.status(200).json(uniqueCredential);
    }else{
        const allCredentials = await credentialService.allCredentials(userId);
        return res.send(allCredentials);
    }
}

export async function removeCredentials(req: Request, res: Response) {
    const { credentialId } = req.params;
    if (!credentialId) {
        throw new AppError("CredentialId not found", 403);
    }
    const userId = res.locals.userId;
    await credentialService.deleteCredential(+credentialId, userId);

    return res.sendStatus(200);
}