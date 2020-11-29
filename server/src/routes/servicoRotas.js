//Importa router express
import { Router } from 'express';
//Importa controller
import {
    cadastrarServico,
    getServicos,
    atualizarServico,


    
} from '../controllers/usuarioController';
//Inicializa o router
const router = Router();
//Chama as rotas utilizando as funções do controller
router.route('/servicos').post(cadastrarServico);
router.route('/servicos').get(getServicos);
router.route('/servico').put(atualizarServico);
router.route('/servico').post(getUsuario);

//Exporta o router
export default router;
