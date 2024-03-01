import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";

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
    unique: true,
  },
  votacion: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

