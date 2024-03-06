import { Router } from "express";
import {
  crearSesion,
  obtenerSesion,
  actualizarSiAnfitrionExiste,
} from "../controllers/sesion.controller.js";

const router = Router();

router.post("/api/crear-sesion", crearSesion);
router.get("/api/obtener-sesion/:nombreSesion", obtenerSesion);
router.put(
  "/api/actualizar-presencia-anfitrion/:nombreSesion",
  actualizarSiAnfitrionExiste
);
export default router;
