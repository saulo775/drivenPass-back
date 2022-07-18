import { Wifi } from '@prisma/client';
import { ICreateWifiData } from './../services/wifiService.js';
import prisma from "../config/database.js";

async function findByType(title:string, userId: number) {
    const wifi = await prisma.wifi.findUnique({
        where: {
            userId_title: {
                userId: userId,
                title: title,
            }
        }
    });

    return wifi;
}

async function insertWifi(wifiData: ICreateWifiData) {
    const wifi = await prisma.wifi.create({data: wifiData});   
    return wifi;
}

// async function findById(wifiId: number) {
//     const wifi = await prisma.wifi.findUnique({
//         where: {
//             id: wifiId,
//         }
//     });

//     return wifi;
// }

// async function findAll(userId:number) {
//     const wifis = await prisma.wifi.findMany({
//         where: {
//             userId: userId
//         }
//     });
    
//     return wifis;
// }

// async function removeById(wifiId: number) {
//     await prisma.wifi.delete({
//         where: {
//             id: wifiId,
//         }
//     })
// }

const wifiRepository = {
    findByType,
    insertWifi,
    // findById,
    // findAll,
    // removeById
}

export default wifiRepository;