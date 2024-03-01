import axios from "axios";

export const crearSesion = async (sesionData) =>
  axios.post("http://localhost:3000/api/crear-sesion", sesionData);
