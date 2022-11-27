import { Router } from "express";
import { verifyToken } from "../controllers/auth.controller";
import * as entradasController from "../controllers/entradas.controller";
const router = Router();

router.get('/list',entradasController.selectAllEntradas)
router.post('/insert',entradasController.insertEntrada)
// router.post('/update',entradasController.updateCliente)
// router.delete('/delete/:idCliente',entradasController.deleteCliente)

module.exports = router;