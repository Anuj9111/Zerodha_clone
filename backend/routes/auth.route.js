import { signUp ,login} from "../controllers/authcontroller.js";

import express from "express";
import { userVerification } from "../middlewares/authmiddleware.js";

const router = express.Router();

router.post("/signup",signUp);
router.post('/login',login);

router.post('/',userVerification)
export default router;