import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysql.config.js";
import bcrypt from "bcrypt";

export const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: { msg: "El nombre solo puede contener letras" },
        notEmpty: true,
        min: 5,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        min: 5,
        notEmpty: true,
      },
    },
  },
  {
    hooks: {
      beforeCreate: (usuario) => {
        if (usuario.password) {
          const salt = bcrypt.genSaltSync(10, "a");
          usuario.password = bcrypt.hashSync(usuario.password, salt);
        }
      },
    },
    beforeUpdate: (usuario) => {
      if (usuario.password) {
        const salt = bcrypt.genSaltSync(10, "a");
        usuario.password = bcrypt.hashSync(usuario.password, salt);
      }
    },
  },
  {
    instanceMethods: {
      validPassword: (password) => {
        return bcrypt.compareSync(password, this.password);
      },
    },
  }
);
