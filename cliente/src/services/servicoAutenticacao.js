class servicoAutenticacao{
   /* urlCadastro = `${process.env.urlCadastro}/cadastro`;
    static cadastrarCliente(usuario){
        axios.post(urlCadastro,{
            usuario
        })
    }*/
    static async cadastrarCliente(nome, email, senha, telefone, cargo){
        try {
            const res = await fetch('http://localhost:5000/cadastro', {
                method: 'POST',
                body: JSON.stringify({nome, email, senha, telefone, cargo}),
                headers:{'Content-Type':'application/json'}
            });
            const data = await res.json();
            console.log(data);
            if(data._id){
                const go = await fetch('http://localhost:8080/',{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    redirect: 'follow'
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async cadastrarBarbeiro(nome, email, senha, cpf, telefone, cargo){
        try {
            const res = await fetch('http://localhost:5000/cadastro', {
                method: 'POST',
                body: JSON.stringify({nome, email, senha, cpf, telefone, cargo}),
                headers:{'Content-Type':'application/json'}
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    static async login(email, senha){
        try {
            const res = await fetch('http://localhost:5000/login', {
                method: 'POST',
                body: JSON.stringify({email, senha}),
                headers:{'Content-Type':'application/json'}
            });
            const data = await res.json();
            console.log(data);
            this.$router.push('/')
        } catch (error) {
            console.log(error);
        }
    }
}

export default servicoAutenticacao;
