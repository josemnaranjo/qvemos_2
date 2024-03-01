import axios from "axios";

export const registrar = async (usuario) =>
  await axios.post("http://localhost:3000/api/registrar", usuario);

export const logout = async () =>
  await axios.post("http://localhost:3000/api/logout");

export const login = async (usuario) =>
  await axios.post("http://localhost:3000/api/login", usuario);
