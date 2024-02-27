import express from "express";
import cors from "cors";
import { sequelize } from "./config/mysql.config.js";

//* importacion de rutas
import usuarioRoutes from "./routes/usuario.routes.js";
import sesionRoutes from "./routes/sesion.routes.js";
import evaluacionRoutes from "./routes/evaluacion.routes.js";
import peliculaRoutes from "./routes/pelicula.routes.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

//* implementacion de rutas
app.use(usuarioRoutes);
app.use(sesionRoutes);
app.use(evaluacionRoutes);
app.use(peliculaRoutes);

async function main() {
  try {
    await sequelize.sync();
    console.log("Conexión exitosa a base de datos");
    app.listen(port, () => {
      console.log(`Conexón con el puerto ${port} establecida exitosamente`);
    });
  } catch (err) {
    console.log("Error al establecer conexión con la base de datos",err);
  }
}

main()
