import { Sesion } from "../controllers/sesion.controller.js";

export const crearSesion = async (req, res) => {
  try {
    const { nombreSesion } = req.body;
    const sesion = await Sesion.create({
      nombreSesion: nombreSesion,
    });
    res.json({
      mensaje: "Sesion creada de forma exitosa",
      sesion
    });
  } catch (err) {
    res.status(500).json({
      mensaje: "Algo salió mal al momento de crear la sesión",
      errores: err,
    });
  }
};
