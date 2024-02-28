import { Router } from "express";
import {
  crearPelicula,
  obtenerPeliculasDeUnaSesion,
  votacionEnSesion,
} from "../controllers/pelicula.controller.js";

const router = Router();

router.post(`/api/crear-pelicula/:nombreSesion`, crearPelicula);
router.get(
  "/api/peliculas-de-la-sesion/:nombreSesion",
  obtenerPeliculasDeUnaSesion
);
router.post("/api/votacion", votacionEnSesion);
export default router;
