import { Router } from "express";
import { verifyToken } from "../controllers/auth.controller";
import * as salidasController from "../controllers/salidas.controller";
const router = Router();

router.get('/list',salidasController.selectAllSalidas)
router.post('/insert',salidasController.insertSalida)
// router.post('/update',entradasController.updateCliente)
// router.delete('/delete/:idCliente',entradasController.deleteCliente)

module.exports = router;