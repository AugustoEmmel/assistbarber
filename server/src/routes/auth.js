//Importa router express
import { Router } from 'express';
//Importa controller
import authController from '../controllers/authController';
//Inicializa o router
const router = Router();
//Chama as rotas utilizando as funções do controller
router.post('/cadastro', authController.cadastroPost);
router.post('/login', authController.loginPost);

//Exporta o router
export default router;
