import { Router } from "express";
import { Registro, Login, Logout } from "../controllers/usuario.controller.js";

const router = Router()

router.post("/api/registrar", Registro)
router.post("/api/login",Login),
router.post("/api/logout", Logout)


export default router