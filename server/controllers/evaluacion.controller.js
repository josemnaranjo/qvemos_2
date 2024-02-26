import { Evaluacion } from "../models/Evaluacion.js";
import { Pelicula } from "../models/Pelicula.js";

export const crearEvaluacion = async (req, res) => {
  try {
    const { titulo, nota, evaluacion } = req.body;

    //*obtengo informacion de la pelicula, y de esta, su id
    const pelicula = await Pelicula.findAll({ where: { titulo: titulo } });
    const peliculaId = pelicula[0].id;

    //* creo evaluacion de la pelicula
    const solicitudEvaluacion = await Evaluacion.create({
      nota,
      evaluacion,
      peliculaId,
    });
    res.json({
      mensaje: "Evaliacion creada con éxito",
      solicitudEvaluacion,
    });
  } catch (err) {
    res.json({
      mensaje: "Algo salió mal al crear la recomendación",
      errores: err.errors,
    });
  }
};
