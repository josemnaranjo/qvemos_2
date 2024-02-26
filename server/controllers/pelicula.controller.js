import { Pelicula } from "../models/Pelicula.js";
import { Sesion } from "../models/Sesion.js";

export const crearPelicula = async (req, res) => {
  try {
    const { nombreSesion } = req.params;
    const { titulo } = req.body;

    //* obtengo informacion de la sesion, su id en particular
    const sesion = await Sesion.findAll({
      where: { nombreSesion: nombreSesion },
    });
    const sesionId = sesion[0].id;

    //* creo película y asosio la sesion
    const nuevaPelicula = await Pelicula.create({
      titulo,
      sesionId,
    });
    res.json({ mensaje: "Pelicula creada exitosamente", nuevaPelicula });
  } catch (err) {
    res.status(500).json({
      mensaje: "Algo salió mal al crear una nueva película",
      errores: err,
    });
  }
};
