import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";
import cardSchema from "../schemas/cardSchema.js";

export function validateCardData(req: Request, res: Response, next: NextFunction){
    const card = cardSchema.validate(req.body);

    if (card.error) {
        throw new AppError("Some incorrect or missing input Card", 422);
    }
    next();
} 