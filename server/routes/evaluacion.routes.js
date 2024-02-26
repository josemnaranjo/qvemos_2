import { Router } from "express";
import { crearEvaluacion } from "../controllers/evaluacion.controller";

const router = Router();

router.post("/api/crear-evaluacion", crearEvaluacion);

export default router;
