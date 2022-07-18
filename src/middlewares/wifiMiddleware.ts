import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError.js";
import wifiSchema from "../schemas/wifiSchema.js";

export function validatWifiData(req: Request, res: Response, next: NextFunction){
    const note = wifiSchema.validate(req.body);

    if (note.error) {
        throw new AppError("Some incorrect or missing wifi input", 422);
    }
    next();
} 