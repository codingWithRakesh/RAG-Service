import { Router } from "express";
import {
    uploadFile,
    deleteFile
} from "../controllers/upload.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/upload").post(upload.single("file"), uploadFile);
router.route("/delete").post(deleteFile);

export default router;