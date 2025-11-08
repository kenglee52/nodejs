import { Router } from "express";
import * as MenuController from "../controllers/menu.controller";

const router = Router();

router.get("/", MenuController.getAll);
router.get("/:id", MenuController.getById);
router.post("/", MenuController.create);
router.put("/:id", MenuController.update);
router.delete("/:id", MenuController.remove);

export default router;