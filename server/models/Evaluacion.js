import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config";

export const Evaluacion = sequelize.define("Evaluacion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nota: {
    type: DataTypes.NUMBER,
  },
  evaluacion:{
    type: DataTypes.STRING
  }
});
