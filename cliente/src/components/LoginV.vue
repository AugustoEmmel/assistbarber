<template> 
    <v-menu
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" small text class="white">
                <span>
                    Login
                    <v-icon>mdi-account-key</v-icon>
                </span>
            </v-btn>
        </template>

        <v-card>
            <span class=" ml-3 ">Login</span>
            <v-form ref="form" lazy-validation class="pa-3">
                <v-text-field
                    label="e-mail"
                    placeholder="Ex.: joaobatista@gmail.com"
                    v-model="email"
                    outlined
                ></v-text-field>

                <v-text-field
                    label="Senha"
                    placeholder="senha"
                    v-model="senha"
                    outlined
                    :type="'password'"
                ></v-text-field>
                <v-btn color="success" class="mr-4" @click="login">
                    Entrar
                </v-btn>
            </v-form>
        </v-card>
    </v-menu>
</template>

<script>
import servicoAutenticacao from '../services/servicoAutenticacao'
export default {
    data(){
        return{
            email:'',
            senha:''
        }
    },
    methods:{
        async login(){
        try {
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
    }
}
</script>