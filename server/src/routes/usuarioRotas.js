//Importa router express
import { Router } from 'express';
//Importa controller
import {cadastrar, login} from '../controllers/usuarioController';
//Inicializa o router
const router = Router();
//Chama as rotas utilizando as funções do controller
router.route('/cadastro').post(cadastrar);
router.route('/login').post(login);

//Exporta o router
export default router;
