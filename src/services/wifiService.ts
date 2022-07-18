import { Wifi } from "@prisma/client";
import { AppError } from "../errors/AppError.js";
import wifiRepository from "../repositories/wifiRepository.js";
import { encryptPassword, decryptPassword } from "../utils/passwordUtil.js";

import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.KEY_CRYPTR);

export type ICreateWifiData = Omit<Wifi, "id">

async function createNewWifi(wifiData: ICreateWifiData) {
    let {title, userId, password } = wifiData;
    wifiData.password = await encryptPassword(password);
    await checkIfCanSaveWifi(title, userId);
    const wifi = await wifiRepository.insertWifi(wifiData);
    return wifi;
}

async function checkIfCanSaveWifi(title: string, userId: number) {
    const wifi = await wifiRepository.findByType(title, userId);
    if (wifi) {
        throw new AppError("Already exists one wifi with this name", 409);
    }
}

// async function oneWifi(wifiId: number, userId: number){
//     const wifi = await wifiRepository.findById(wifiId);
//     if (!wifi) {
//         throw new AppError("Wifi not found", 404);
//     }

//     if (wifi.userId !== userId) {
//         throw new AppError("This wifi is not yours", 403);
//     }

//     wifi.password = await decryptPassword(wifi.password);
//     return wifi;
// }

// async function allWifis(userId: number){
//     const wifis = await wifiRepository.findAll(userId);
//     if (!wifis) {
//         throw new AppError("Wifi not found", 404);
//     }
//     return wifis;
// }

// async function deleteWifi(wifiId: number, userId: number) {
//     const wifi = await wifiRepository.findById(wifiId);
//     if (!wifi) {
//         throw new AppError("Wifi not found", 404);
//     }
    
//     if (wifi.userId !== userId) {
//         throw new AppError("Wifi is not this user", 403);
//     }

//     await wifiRepository.removeById(wifiId);
// }

const wifiService = {
    createNewWifi,
    // oneWifi,
    // allWifis,
    // deleteWifi
}

export default wifiService