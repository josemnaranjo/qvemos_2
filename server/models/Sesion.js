import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";
import { Usuario } from "./Usuario.js";
import { Pelicula } from "./Pelicula.js";

export const Sesion = sequelize.define("Sesion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

Sesion.hasMany(Usuario, {
  foreignKey: "sesionId",
  sourceKey: "id",
});
Usuario.belongsTo(Sesion, {
  foreignKey: "sesionId",
  targetKey: "id",
});

Sesion.hasMany(Pelicula, {
  foreignKey: "sesionId",
  sourceKey: "id",
});

Pelicula.belongsTo(Sesion, {
  foreignKey: "sesionId",
  targetKey: "id",
});
