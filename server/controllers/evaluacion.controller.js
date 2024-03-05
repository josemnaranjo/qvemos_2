import { Evaluacion } from "../models/Evaluacion.js";
import { Pelicula } from "../models/Pelicula.js";

export const crearEvaluacion = async (req, res) => {
  try {
    const { titulo, comentario, puntuacion } = req.body;

    //*creo evaluacion y obtengo su id
    const solicitudEvaluacion = await Evaluacion.create({ comentario, puntuacion });
    const evaluacionId = solicitudEvaluacion.id;

    //* actualizo la película con el id de la evaluacion
    await Pelicula.update(
      { evaluacionId: evaluacionId },
      { where: { titulo: titulo } }
    );

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
