import { Router } from "express";
import * as UnitController from "../controllers/unit.controller";

const router = Router();
router.post("/", UnitController.Create);
router.get("/", UnitController.getAll);
router.get("/:id", UnitController.getById);
router.put("/:id", UnitController.update);
router.delete("/:id", UnitController.Remove);

export default router;