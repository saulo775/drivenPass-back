import { Request, Response } from "express";
import { ICreateUserData } from './../services/authService.js';
import authService from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    const userData: ICreateUserData = req.body;

    await authService.createNewUser(userData);
    res.sendStatus(201);
}