import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";
import { Evaluacion } from "./Evaluacion.js";

export const Pelicula = sequelize.define("Pelicula", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    notEmpty: true,
    min: 2,
  },
  votacion: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
  },
});

Pelicula.hasMany(Evaluacion, {
  foreignKey: "peliculaId",
  sourceKey: "id",
});

Evaluacion.belongsTo(Pelicula, {
  foreignKey: "peliculaId",
  targetId: "id",
});
