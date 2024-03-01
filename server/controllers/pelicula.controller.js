import { sequelize } from "../config/mysql.config.js";
import { Pelicula } from "../models/Pelicula.js";
import { Sesion } from "../models/Sesion.js";

export const crearRecomendaciones = async (req, res) => {
  try {
    const { nombreSesion } = req.params;
    const recomendaciones = req.body.recomendaciones;

    //* obtengo id de sesion
    const sesion = await Sesion.findAll({
      where: { nombreSesion: nombreSesion },
    });
    const sesionId = sesion[0].id;

    //*agregego a cada objeto del array "recomendaciones" el sesionId
    const newRecomendacionesArray = recomendaciones.map((r)=> ({...r, sesionId:sesionId}))

    //* creo película y paso id de sesion
    const nuevasRecomendaciones = await Pelicula.bulkCreate(newRecomendacionesArray);

    res.json({
      mensaje: "Recomendaciones enviadas exitosamente",
      nuevasRecomendaciones,
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
    const tableName = "Peliculas";

    //* hago loop que coloca dentro de array "statements" el raw query para cada id (se actualiza el valor de votacion)
    for (let i = 0; i < votacionArray.length; i++) {
      statements.push(
        sequelize.query(
          `
                UPDATE ${tableName}
                SET votacion= votacion + ${votacionArray[i].votacion}
                WHERE id=${votacionArray[i].id}
                `
        )
      );
    }
    //* promise.all es un metodo que devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable (array statements) se
    //* hayan concluido con éxito
    const newMoviesArray = await Promise.all(statements);

    res.json(newMoviesArray);
  } catch (err) {
    res.status(500).json({
      mensaje: "Algo salió mal al ingresar la votacion",
      errores: err,
    });
  }
};

export const resultadosDeVotacion = async (req, res) => {
  try {
    const { nombreSesion } = req.params;
    const sesionData = await Sesion.findOne({
      where: { nombreSesion: nombreSesion },
    });
    const sesionId = sesionData.id;
    const moviesData = await Pelicula.findAll({
      where: { sesionId: sesionId },
      order: [["votacion", "DESC"]],
    });
    res.json(moviesData);
  } catch (error) {
    res.status(500).json({
      mensaje: "Algo salió mal al obtener los resultados de la votación",
      errores: error,
    });
  }
};
