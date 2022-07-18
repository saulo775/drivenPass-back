import Joi from "joi";
import { ICreateWifiData } from "../services/wifiService";

const URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/

const wifiSchema = Joi.object<ICreateWifiData>({
    title: Joi.string().required(),
    networkName: Joi.string().required(),
    password: Joi.string().required(),
});

export default wifiSchema;
