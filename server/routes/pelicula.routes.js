import { Router } from "express";
import {
  crearRecomendaciones,
  obtenerPeliculasDeUnaSesion,
  votacionEnSesion,
  resultadosDeVotacion,
  obtenerLasTresMejoresRecomendaciones,
} from "../controllers/pelicula.controller.js";

const router = Router();

router.post(`/api/crear-pelicula/:nombreSesion`, crearRecomendaciones);
router.get(
  "/api/peliculas-de-la-sesion/:nombreSesion",
  obtenerPeliculasDeUnaSesion
);
router.post("/api/votacion", votacionEnSesion);
router.get("/api/resultado-votacion/:nombreSesion", resultadosDeVotacion);
router.get(
  "/api/mejores-recomendaciones",
  obtenerLasTresMejoresRecomendaciones
);
export default router;
