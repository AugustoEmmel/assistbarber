//Importa router express
import { Router } from "express";
import servicoController from "../controllers/servicoController.js";

const router = Router();

router.get('/servicos', ()=>{});
router.post('/servicos', servicoController.setServico);

export default router;