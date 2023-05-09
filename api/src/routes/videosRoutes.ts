import { Router } from "express";
import * as videoCtrl from "../controllers/videosContreoller";
const router = Router();

router.get("/", videoCtrl.getVideos);
router.get("/:id", videoCtrl.getVideo);
router.post("/", videoCtrl.createVideos);
router.put("/:id", videoCtrl.updateVideos);
router.delete("/:id", videoCtrl.deleteVideos);

export default router;
