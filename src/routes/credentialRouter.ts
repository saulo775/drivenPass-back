import { Router } from "express";
import { 
    createCredential, 
    selectCredentials 
} from "../controllers/credentialController.js";
import { validateToken } from "../middlewares/authMiddleware.js";
import { validateCredentialData } from "../middlewares/credentialsMiddleware.js"

const credentialRouter = Router();
credentialRouter.use(validateToken);

credentialRouter.post("/credentials", validateCredentialData, createCredential)
credentialRouter.get("/credentials/", selectCredentials);

export default credentialRouter;