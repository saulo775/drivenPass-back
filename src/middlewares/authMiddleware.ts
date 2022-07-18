import jwt from "jsonwebtoken";
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

export async function validateToken(req: Request, res: Response, next: NextFunction) {
    const Authorization = req.headers['authorization'];
    if (!Authorization) {
        throw new AppError("Token is missing", 404);
    }
    const secretKey = process.env.JWT_SECRET;
    const token = Authorization.replace("Bearer", "").trim();
    
    let data
    try {
        data = jwt.verify(token, secretKey);
    } catch (error) {
        throw new AppError("Invalid token", 403);
    }
    res.locals.userId = data.userId;
    next();
}

