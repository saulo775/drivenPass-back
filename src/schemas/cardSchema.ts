import Joi from "joi";
import { ICreateCardData } from "../services/cardService";

const cardSchema = Joi.object<ICreateCardData>({
    title: Joi.string().required(),
    cardNumber: Joi.string().required(),
    username: Joi.string().required(),
    securityCode: Joi.string().required(),
    expirationDate: Joi.string().required(),
    password: Joi.string().required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().valid('credit', 'debit', 'both').required()
});

export default cardSchema;
