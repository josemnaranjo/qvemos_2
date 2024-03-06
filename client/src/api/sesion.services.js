import axios from "axios";

export const crearSesion = async (sesionData) =>
  axios.post("http://localhost:3000/api/crear-sesion", sesionData);

export const obtenerSesion = async (nombreSesion) =>
  axios.get(`http://localhost:3000/api/obtener-sesion/${nombreSesion}`);

export const actualizarPresenciaDeAnfitrion = async (nombreSesion) =>
  axios.put(
    `http://localhost:3000/api/actualizar-presencia-anfitrion/${nombreSesion}`
  );
