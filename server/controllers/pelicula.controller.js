import { sequelize } from "../config/mysql.config.js";
import { Pelicula } from "../models/Pelicula.js";
import { Sesion } from "../models/Sesion.js";

export const crearPelicula = async (req, res) => {
  try {
    const { nombreSesion } = req.params;
    const { titulo } = req.body;

    //* obtengo id de sesion
    const sesion = await Sesion.findAll({
      where: { nombreSesion: nombreSesion },
    });
    const sesionId = sesion[0].id;

    //* creo película y paso id de sesion
    const nuevaPelicula = await Pelicula.create({
      titulo,
      sesionId,
    });

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

export const obtenerPeliculasDeUnaSesion = async (req, res) => {
  try {
    const { nombreSesion } = req.params;

    //* obtengo id de sesion con el nombre de esta
    const sesion = await Sesion.findAll({
      where: { nombreSesion: nombreSesion },
    });
    const sesionId = sesion[0].id;

    //* obtengo todas las peliculas de la sesion
    const peliculas = await Pelicula.findAll({ where: { sesionId: sesionId } });

    res.json(peliculas);
  } catch (error) {
    res.status(500).json({
      mensaje: "Algo salió mal al obtener las películas de la sesion",
      errores: err,
    });
  }
};

export const votacionEnSesion = async (req, res) => {
  try {
    const { votacionArray } = req.body;
    const statements = [];
    const tableName = "Peliculas"
    for(let i = 0; i< votacionArray.length; i++) {
        statements.push(
            sequelize.query(
                `
                UPDATE ${tableName}
                SET votacion=${votacionArray[i].votacion}
                WHERE id=${votacionArray[i].id}
                `
            )
        )
    }
    const newMoviesArray =  await Promise.all(statements)

    res.json(newMoviesArray);
  } catch (err) {
    res.status(500).json({
      mensaje: "Algo salió mal al ingresar la votacion",
      errores: err,
    });
  }
};
