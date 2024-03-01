import { Sesion } from "../models/Sesion.js";

export const crearSesion = async (req, res) => {
  try {
    const { nombreSesion, genero } = req.body;
    const sesion = await Sesion.create({
      nombreSesion: nombreSesion,
      genero: genero,
    });
    res.json({
      mensaje: "Sesion creada de forma exitosa",
      sesion,
    });
  } catch (err) {
    res.status(500).json({
      mensaje: "Algo salió mal al momento de crear la sesión",
      errores: err,
    });
  }
};

export const obtenerSesion = async (req, res) => {
  try {
    const { nombreSesion } = req.params;
    const sesion = await Sesion.findOne({
      where: { nombreSesion: nombreSesion },
    });
    res.json(sesion);
  } catch (error) {
    res.status(500).json({
      mensaje:
        "Algo salió mal al momento de obtener la información de la sesion",
      errores: err,
    });
  }
};
