import { ICreateUserData } from './../services/authService';
import Joi from "joi";

const authSchema = Joi.object<ICreateUserData>({
    email: Joi.string().email({tlds: {allow: false}}).required(),
    password: Joi.string().required()
});

export default authSchema;
