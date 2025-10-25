import { Router } from "express";
import * as TableController from "../controllers/table.controller";

const router = Router();
router.get("/", TableController.getAll);

export default router;