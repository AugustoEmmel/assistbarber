import axios from 'axios';
class servicoAutenticacao{
    urlCadastro = `${process.env.urlCadastro}usuario/cadastro`;
    static cadastrarCliente(usuario){
        axios.post(urlCadastro,{
            usuario
        })
    }
}

export default servicoAutenticacao;
