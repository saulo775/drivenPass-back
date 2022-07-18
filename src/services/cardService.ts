import { Cards } from "@prisma/client";
import { AppError } from "../errors/AppError.js";
import cardRepository from "../repositories/cardRepository.js";
import { encryptPassword, decryptPassword } from "../utils/passwordUtil.js";

import Cryptr from "cryptr";
const cryptr = new Cryptr(process.env.KEY_CRYPTR);

export type ICreateCardData = Omit<Cards, "id">

async function createNewCard(cardData: ICreateCardData) {
    let {title, userId, password } = cardData;
    cardData.password = await encryptPassword(password);
    await checkIfCanSaveCard(title, userId);
    const card = await cardRepository.insertCard(cardData);
    return card;
}

async function checkIfCanSaveCard(title: string, userId: number) {
    const card = await cardRepository.findByType(title, userId);
    if (card) {
        throw new AppError("Already exists one card with this name", 409);
    }
}

async function oneCard(cardId: number, userId: number){
    const card = await cardRepository.findById(cardId);
    if (!card) {
        throw new AppError("Card not found", 404);
    }

    if (card.userId !== userId) {
        throw new AppError("This card is not yours", 403);
    }

    card.password = await decryptPassword(card.password);
    return card;
}

async function allCards(userId: number){
    const cards = await cardRepository.findAll(userId);
    if (!cards) {
        throw new AppError("Card not found", 404);
    }
    return cards;
}

async function deleteCard(cardId: number, userId: number) {
    const card = await cardRepository.findById(cardId);
    if (!card) {
        throw new AppError("Card not found", 404);
    }
    
    if (card.userId !== userId) {
        throw new AppError("Card is not this user", 403);
    }

    await cardRepository.removeById(cardId);
}

const cardService = {
    createNewCard,
    oneCard,
    allCards,
    deleteCard
}

export default cardService