import { Router } from "express";
import { crearPelicula } from "../controllers/pelicula.controller.js";

const router = Router();

router.post(`/crear-pelicula/:nombreSesion`, crearPelicula);

export default router;
