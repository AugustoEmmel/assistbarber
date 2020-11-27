//Importa router express
import { Router } from 'express';
//Importa controller
import usuarioController from '../controllers/usuarioController';
//Inicializa o router
const router = Router();
//Chama as rotas utilizando as funções do controller
router.route('/cadastro').post(usuarioController.cadastroPost);
router.route('/login').post(usuarioController.loginPost);

//Exporta o router
export default router;
