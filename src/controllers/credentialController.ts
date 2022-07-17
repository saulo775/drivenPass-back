import { Request, Response } from "express";
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
