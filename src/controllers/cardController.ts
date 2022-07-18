import { Request, Response } from "express";
import { AppError } from "../errors/AppError.js";
import cardService from "../services/cardService.js";
import { ICreateCardData } from "../services/cardService.js";

export async function createCard(req: Request, res: Response) {
    const body = req.body;
    const cardData: ICreateCardData = {
        ...body,
        userId: res.locals.userId
    }

    const card = await cardService.createNewCard(cardData)
    res.status(201).send(card)
}

export async function selectCards(req: Request, res: Response) {
    const { cardId } = req.query;
    const userId = res.locals.userId;

    if (cardId) {
        const uniqueCard = await cardService.oneCard(+cardId, userId)
        return res.status(200).json(uniqueCard);
    }else{
        const allCards = await cardService.allCards(userId);
        return res.send(allCards);
    }
}

export async function removeCards(req: Request, res: Response) {
    const { cardId } = req.params;
    if (!cardId) {
        throw new AppError("CardId not found", 403);
    }
    const userId = res.locals.userId;
    await cardService.deleteCard(+cardId, userId);

    return res.sendStatus(200);
}