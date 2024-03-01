import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";
import { Pelicula } from "./Pelicula.js";


export const Sesion = sequelize.define("Sesion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreSesion: {
    type: DataTypes.STRING
  },
  genero:{
    type:DataTypes.STRING
  }
});

Sesion.hasMany(Pelicula,{
    foreignKey: "sesionId",
  sourceKey: "id",
})

Pelicula.belongsTo(Sesion,{
    foreignKey: "sesionId",
  targetId: "id",
})

