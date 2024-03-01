import axios from "axios";

export const crearRecomendaciones = async (nombreSesion, recomendaciones) =>
  await axios.post(
    `http://localhost:3000/api/crear-pelicula/${nombreSesion}`,
    recomendaciones
  );
