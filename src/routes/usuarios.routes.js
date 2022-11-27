import { Router } from "express";
import {verifyToken } from "../controllers/auth.controller";
import * as usuariosController from "../controllers/usuarios.controller";
const router = Router();

router.get("/list",usuariosController.getAllUsers);
router.post("/addUser",usuariosController.addUser);
router.post("/updateUser",usuariosController.updateUser)
router.delete("/deleteUser/:idUsuario",usuariosController.deleteUser);
module.exports = router;