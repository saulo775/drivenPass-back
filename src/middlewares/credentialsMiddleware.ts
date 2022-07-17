import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";
import credentialSchema from "../schemas/credentialSchema.js";

export function validateCredentialData(req: Request, res: Response, next: NextFunction){
    const credential = credentialSchema.validate(req.body);

    if (credential.error) {
        throw new AppError("Some incorrect or missing input", 422);
    }
    next();
} 