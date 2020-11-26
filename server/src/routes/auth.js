//Importa router express
const { Router } = require('express');
//Importa controller
const {
    loginPost,
    cadastroPost
} = require('../controllers/authController');
//Inicializa o router
const router = Router();
//Chama as rotas utilizando as funções do controller
router.post('/cadastro', cadastroPost);
router.post('/login', loginPost);

//Exporta o router
module.exports = router;
