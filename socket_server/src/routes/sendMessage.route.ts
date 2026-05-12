import { Router } from "express";
import {
    sendMessage
} from "../controller/sendMessage.controller.js";

const router: Router = Router();

router.route("/query").post(sendMessage);

export default router;