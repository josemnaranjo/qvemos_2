import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";


export const Sesion = sequelize.define("Sesion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreSesion: {
    type: DataTypes.STRING
  }
});


