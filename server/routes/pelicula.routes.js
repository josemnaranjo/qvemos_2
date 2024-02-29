import { Router } from "express";
import {
  crearPelicula,
  obtenerPeliculasDeUnaSesion,
  votacionEnSesion,
  resultadosDeVotacion,
} from "../controllers/pelicula.controller.js";

const router = Router();

router.post(`/api/crear-pelicula/:nombreSesion`, crearPelicula);
router.get(
  "/api/peliculas-de-la-sesion/:nombreSesion",
  obtenerPeliculasDeUnaSesion
);
router.post("/api/votacion", votacionEnSesion);
router.get("/api/resultado-votacion/:nombreSesion", resultadosDeVotacion);
export default router;
