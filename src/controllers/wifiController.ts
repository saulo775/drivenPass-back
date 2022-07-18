import { Request, Response } from "express";
import { AppError } from "../errors/AppError.js";
import wifiService from "../services/wifiService.js";
import { ICreateWifiData } from "../services/wifiService.js";

export async function createWifi(req: Request, res: Response) {
    const body = req.body;
    const wifiData: ICreateWifiData = {
        ...body,
        userId: res.locals.userId
    }

    const wifi = await wifiService.createNewWifi(wifiData)
    res.status(201).send(wifi)
}

export async function selectWifis(req: Request, res: Response) {
    const { wifiId } = req.query;
    const userId = res.locals.userId;

    if (wifiId) {
        const uniqueWifi = await wifiService.oneWifi(+wifiId, userId)
        return res.status(200).json(uniqueWifi);
    }else{
        const allWifis = await wifiService.allWifis(userId);
        return res.send(allWifis);
    }
}

// export async function removeWifis(req: Request, res: Response) {
//     const { wifiId } = req.params;
//     if (!wifiId) {
//         throw new AppError("WifiId not found", 403);
//     }
//     const userId = res.locals.userId;
//     await wifiService.deleteWifi(+wifiId, userId);

//     return res.sendStatus(200);
// }