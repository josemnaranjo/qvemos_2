import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";
import { Pelicula } from "./Pelicula.js";

export const Evaluacion = sequelize.define("Evaluacion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nota: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  evaluacion: {
    type: DataTypes.STRING,
  },
});

Evaluacion.hasMany(Pelicula, {
  foreignKey: "evaluacionId",
  sourceKey: "id",
});

Pelicula.belongsTo(Evaluacion, {
  foreignKey: "evaluacionId",
  targetId: "id",
});
