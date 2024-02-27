import { Router } from "express";
import {
  crearPelicula,
  obtenerPeliculasDeUnaSesion,
} from "../controllers/pelicula.controller.js";

const router = Router();

router.post(`/api/crear-pelicula/:nombreSesion`, crearPelicula);
router.get(
  "/api/peliculas-de-la-sesion/:nombreSesion",
  obtenerPeliculasDeUnaSesion
);
export default router;
