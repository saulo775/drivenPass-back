import Joi from "joi";
import { ICreateCredentialData } from "../services/credentialService";

const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/


const credentialSchema = Joi.object<ICreateCredentialData>({
    title: Joi.string().required(),
    url: Joi.string().pattern(URL_REGEX).required(),
    username: Joi.string().required(),
    password: Joi.string().min(10).required(),
});

export default credentialSchema;
