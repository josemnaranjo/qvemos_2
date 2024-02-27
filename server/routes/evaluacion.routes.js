import { Router } from "express";
import { crearEvaluacion } from "../controllers/evaluacion.controller.js";

const router = Router();

router.post("/api/crear-evaluacion", crearEvaluacion);

export default router;
