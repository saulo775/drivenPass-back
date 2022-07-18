import { Router } from "express";
import { 
    createWifi, 
    selectWifis, 
    // removeWifis 
} from "../controllers/wifiController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validatWifiData } from "../middlewares/wifiMiddleware.js"

const wifiRouter = Router();
wifiRouter.use(validateToken);

wifiRouter.post("/wifi", validatWifiData, createWifi)
wifiRouter.get("/wifi", selectWifis);
// wifiRouter.delete("/wifi/:wifiId", removeWifis);

export default wifiRouter;