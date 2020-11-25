const { Router } = require('express');
const {
    getServicos,
    getServico,
    setServico,
    updateServico
} = require('../controllers/servicosController')

const router = Router();

router.get('/servicos', ()=>{});
router.post('/servicos', setServico);

module.exports = router;