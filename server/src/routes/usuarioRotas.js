//Importa router express
import { Router } from 'express';
//Importa controller
import {cadastroPost, loginPost} from '../controllers/usuarioController';
//Inicializa o router
const router = Router();
//Chama as rotas utilizando as funções do controller
router.route('/cadastro').post(cadastroPost);
router.route('/login').post(loginPost);

//Exporta o router
export default router;
