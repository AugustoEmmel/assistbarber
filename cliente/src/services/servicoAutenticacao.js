class servicoAutenticacao{
   /* urlCadastro = `${process.env.urlCadastro}/cadastro`;
    static cadastrarCliente(usuario){
        axios.post(urlCadastro,{
            usuario
        })
    }*/
    static async cadastrarCliente(nome, email, senha, telefone, cargo){
        try {
            const res = await fetch(process.env.urlCadastro, {
                method: 'POST',
                body: JSON.stringify({nome, email, senha, telefone, cargo}),
                headers:{'Content-Type':'application/json'}
            });
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }
}

export default servicoAutenticacao;
