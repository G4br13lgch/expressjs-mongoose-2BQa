import { Router } from "express";
import { verifyToken } from "../controllers/auth.controller";
import * as clientesController from "../controllers/clientes.controller";
const router = Router();

router.get('/list',clientesController.selectAllClientes)
router.post('/insert',clientesController.insertCliente)
router.post('/update',clientesController.updateCliente)
router.delete('/delete/:idCliente',clientesController.deleteCliente)

module.exports = router;