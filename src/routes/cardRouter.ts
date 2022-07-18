import { Router } from "express";
import { 
    createCard, 
    selectCards,
    removeCards, 
} from "../controllers/cardController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateCardData } from "../middlewares/cardsMiddleware.js"

const cardRouter = Router();
cardRouter.use(validateToken);

cardRouter.post("/cards", validateCardData, createCard)
cardRouter.get("/cards/", selectCards);
cardRouter.delete("/cards/:cardId", removeCards);

export default cardRouter;