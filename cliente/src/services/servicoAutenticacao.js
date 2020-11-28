import axios from 'axios';

const url = `http://localhost:9000/usuario/cadastro`;

class servicoAutenticacao{
    static cadastrarCliente(){
        return axios.post(url,{
            nome, 
            email, 
            senha,  
            telefone,
            localizacao,
            cargo
        });
    }
}

export default servicoAutenticacao;
