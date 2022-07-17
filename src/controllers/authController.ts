import { Request, Response } from "express";
import { ICreateUserData } from './../services/authService.js';
import authService from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    const userData: ICreateUserData = req.body;
    await authService.createNewUser(userData);
    
    return res.sendStatus(201);
}

export async function signIn(req: Request, res:Response) {
    const userData: ICreateUserData = req.body;
    const token = await authService.createNewSession(userData);

    return res.status(200).json({token: token});
}