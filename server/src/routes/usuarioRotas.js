//Importa router express
import { Router } from 'express';
//Importa controller
import {
    cadastrar, 
    login,
    getUsuarios,
    getUsuario
} from '../controllers/usuarioController';
//Inicializa o router
const router = Router();
//Chama as rotas utilizando as funções do controller
router.route('/cadastro').post(cadastrar);
router.route('/cadastro').get(getUsuarios);
router.route('/login').post(login);
router.route('/usuario').post(getUsuario);

//Exporta o router
export default router;
