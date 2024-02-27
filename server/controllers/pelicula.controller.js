import { Pelicula } from "../models/Pelicula.js";
import { Sesion } from "../models/Sesion.js";

export const crearPelicula = async (req, res) => {
  try {
    const { nombreSesion } = req.params;
    const { titulo } = req.body;

    //* creo película y obtengo su id
    const nuevaPelicula = await Pelicula.create({
      titulo,
    });
    const peliculaId = nuevaPelicula.id;

    //* actualizo la sesion y le paso el id de la película creada
    const sesion = await Sesion.update(
      { peliculaId: peliculaId },
      { where: { nombreSesion: nombreSesion } }
    );

    res.json({
      mensaje: "Pelicula creada exitosamente",
      nuevaPelicula,
      sesion,
    });
  } catch (err) {
    res.status(500).json({
      mensaje: "Algo salió mal al crear una nueva película",
      errores: err,
    });
  }
};
