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
    type: DataTypes.STRING,
  },
  genero: {
    type: DataTypes.STRING,
  },
  estaAnfitrion: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  numeroDeUsuarios: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue("nombreDeUsuarios").split(";");
    },
    set(val) {
      this.setDataValue("nombreDeUsuarios", val.join(";"));
    },
  },
});

Sesion.hasMany(Pelicula, {
  foreignKey: "sesionId",
  sourceKey: "id",
});

Pelicula.belongsTo(Sesion, {
  foreignKey: "sesionId",
  targetId: "id",
});
