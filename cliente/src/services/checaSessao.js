import vueCookies from 'vue-cookies';
import { checaToken } from '../../../server/src/middleware/authMiddleware';

class checaSessao{
    static checarSessao(){
    try {
        vueCookies.$get

        const res = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({
                email: this.email, 
                senha: this.senha, 
            }),
            headers:{'Content-Type':'application/json'}
        });
        const data = await res.json();
        console.log(data);
        if(data.usuario){
            this.$router.push('/mapa');
        }
        } catch (error) {
            console.log(error);  
        }
    }

    checarToken(){}

    checarUsuario(){}
}



export default checaSessao;