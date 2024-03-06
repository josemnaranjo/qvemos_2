import { Sesion } from "../models/Sesion.js";
import { Usuario } from "../models/Usuario.js";

export const crearSesion = async (req, res) => {
  try {
    const { nombreSesion, genero, nombreUsuario } = req.body;

    const usuarioInfo = await Usuario.findOne({
      where: { nombre: nombreUsuario },
    });
    const usuarioId = usuarioInfo.id;
    const sesion = await Sesion.create({
      nombreSesion: nombreSesion,
      genero: genero,
      usuarioId: usuarioId,
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
      include: [{ model: Usuario, attributes: ["nombre"] }],
    });
    res.json(sesion);
  } catch (error) {
    res.status(500).json({
      mensaje:
        "Algo salió mal al momento de obtener la información de la sesion",
      errores: error,
    });
  }
};

export const actualizarSiAnfitrionExiste = async (req, res) => {
  try {
    const { nombreSesion } = req.params;
    const response = await Sesion.update(
      { estaAnfitrion: true },
      { where: { nombreSesion: nombreSesion } }
    );
    res.json(response);
  } catch (error) {
    res.status(500).json({
      mensaje:
        "Algo salió mal al momento de obtener de actualizar la presencia del anfitrion",
      errores: error,
    });
  }
};
