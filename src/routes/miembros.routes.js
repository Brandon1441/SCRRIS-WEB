import { Router } from "express";
import {
  getMiembros,
  createNewMiembro,
  getMiembroById,
  deleteMiembroById,
  getTotalMiembros,
  updateMiembroById,
} from "../controllers/miembros.controller";

const router = Router();

router.get("/miembros", getMiembros);

router.post("/miembros", createNewMiembro);

router.get("/miembros/count", getTotalMiembros);

router.get("/miembros/:id", getMiembroById);

router.delete("/miembros/:id", deleteMiembroById);

router.put("/miembros/:id", updateMiembroById);

export default router;
