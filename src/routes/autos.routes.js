import { Router } from "express";
import { verifyToken } from "../controllers/auth.controller";
import * as autosController from "../controllers/autos.controller";
const router = Router();

router.get('/list',autosController.selectAllAutos)
router.get('/dashboard',autosController.selectDashboard)
router.post('/insert',autosController.insertAuto)
router.post('/update',autosController.updateAuto)
router.delete('/delete/:idautos',autosController.deleteAuto)

module.exports = router;