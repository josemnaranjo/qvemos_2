import axios from "axios";

export const crearRecomendaciones = async (nombreSesion, recomendaciones) =>
  await axios.post(
    `http://localhost:3000/api/crear-pelicula/${nombreSesion}`,
    recomendaciones
  );

export const obtenerPeliculasDeLaSesion = async (nombreSesion) =>
  await axios.get(
    `http://localhost:3000/api/peliculas-de-la-sesion/${nombreSesion}`
  );
