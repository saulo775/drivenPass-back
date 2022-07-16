import { Request, Response, NextFunction } from "express";
import { AppError } from './../errors/AppError.js';
import authSchema from "../schemas/authSchema.js";

export function validateAuthData(req: Request, res: Response, next: NextFunction) {
    const authData = authSchema.validate(req.body);
    if (authData.error) {
        throw new AppError("Incorrectly formatted password or email", 422);
    }
    next();
}

