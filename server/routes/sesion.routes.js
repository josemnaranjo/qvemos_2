import { Router } from "express";
import { crearSesion } from "../controllers/sesion.controller";

const router = Router();

router.post("/api/crear-sesion", crearSesion);

export default router;
