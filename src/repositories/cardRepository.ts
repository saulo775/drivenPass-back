import { Cards } from '@prisma/client';
import { ICreateCardData } from './../services/cardService.js';
import prisma from "../config/database.js";

async function findByType(title:string, userId: number) {
    const card = await prisma.cards.findUnique({
        where: {
            userId_title: {
                userId: userId,
                title: title,
            }
        }
    });

    return card;
}

async function insertCard(cardData: ICreateCardData) {
    const card = await prisma.cards.create({data: cardData});   
    return card;
}

async function findById(cardId: number) {
    const card = await prisma.cards.findUnique({
        where: {
            id: cardId,
        }
    });

    return card;
}

async function findAll(userId:number) {
    const cards = await prisma.cards.findMany({
        where: {
            userId: userId
        }
    });
    
    return cards;
}

// async function removeById(cardId: number) {
//     await prisma.cards.delete({
//         where: {
//             id: cardId,
//         }
//     })
// }

const cardRepository = {
    findByType,
    insertCard,
    findById,
    findAll,
    // removeById
}

export default cardRepository;