import { Router } from "express";
import { Registro, Login, Logout } from "../controllers/usuario.controller";

const router = Router()

router.post("/registrar", Registro)
router.post("/login",Login),
router.post("/logout", Logout)


export default router