import { Usuario } from "../models/Usuario.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const Registro = async (req, res) => {
  try {
    const { id, nombre, password } = req.body;
    const nuevoUsuario = await Usuario.create({
      nombre: nombre,
      password: password,
    });
    const jwToken = jwt.sign({ id: id }, "tokenSecretoQVemos");
    return res
      .cookie("tokenUsuario", jwToken, "tokenSecretoQVemos", {
        httpOnly: true,
      })
      .json({ mensaje: "éxito al crear usuario", nuevoUsuario });
  } catch (err) {
    res.json({
      mensaje: "Algo salió mal al crear el usuario",
      errores: err.errors,
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { nombre, password } = req.body;
    const usuario = await Usuario.findAll({ where: { nombre: nombre } });

    if (usuario === null) {
      return res.json({
        errores: {
          error: { mensaje: "El usuario no existe en la base de datos" },
        },
      });
    }
    const correctPassword = await bcrypt.compare(password, usuario[0].password);

    if (!correctPassword) {
      return res.json({
        errores: {
          error: { mensaje: "La contraseña es incorrecta" },
        },
      });
    }
    const jwToken = jwt.sign({ id: usuario.id }, "tokenSecretoQVemos");
    return res
      .cookie("tokenUsuario", jwToken, "tokenSecretoQVemos", { httpOnly: true })
      .json({ mensaje: "Usuario loggeado con éxito", usuario });
  } catch (err) {
    res.json({
      mensaje: "Algo salió mal al iniciar sesión",
      err,
    });
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("tokenUsuario");
    res.json({ mensaje: "Usuario deslogueado", success: true });
  } catch (err) {
    return res.json({
      mensaje: "Ocurrió un error al intentar desloguearse",
      error: err.errors,
    });
  }
};
