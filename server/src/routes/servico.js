//Importa router express
import { Router } from 'express';
const {
    getServicos,
    getServico,
    setServico,
    updateServico
} = require('../controllers/servicosController')

const router = Router();

router.get('/servicos', ()=>{});
router.post('/servicos', setServico);

export default router;