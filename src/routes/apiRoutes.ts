import { Router } from "express";
import * as streamingController from "../controllers/streamingController"


const router = Router()

router.get("/", streamingController.home)
router.get("/videos/:slug", streamingController.serveVideo)

export default router