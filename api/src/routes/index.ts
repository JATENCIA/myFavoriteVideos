import { Router } from "express";
const router = Router();
import routerVideos from "./videosRoutes";

router.use("/videos", routerVideos);

export default router;
