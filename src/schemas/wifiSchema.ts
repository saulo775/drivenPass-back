import Joi from "joi";
import { ICreateWifiData } from "../services/wifiService";

const wifiSchema = Joi.object<ICreateWifiData>({
    title: Joi.string().required(),
    networkName: Joi.string().required(),
    password: Joi.string().required(),
});

export default wifiSchema;
