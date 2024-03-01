import { Router } from "express";
import {
  crearSesion,
  obtenerSesion,
} from "../controllers/sesion.controller.js";

const router = Router();

router.post("/api/crear-sesion", crearSesion);
router.get("/api/obtener-sesion/:nombreSesion", obtenerSesion);

export default router;
