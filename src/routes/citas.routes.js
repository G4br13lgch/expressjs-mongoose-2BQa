import { Router } from "express";
import { verifyToken } from "../controllers/auth.controller";
import * as citasController from "../controllers/citas.controller";
const router = Router();

router.get('/list',citasController.selectAllCitas)
router.post('/insert',citasController.insertCita)
router.post('/update',citasController.updateCita)
// router.delete('/delete/:idCliente',citasController.deleteCliente)

module.exports = router;