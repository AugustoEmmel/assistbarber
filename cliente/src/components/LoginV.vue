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
                ></v-text-field>
                <v-btn color="success" class="mr-4">
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
        login(){
            servicoAutenticacao.login(this.email, this.senha)
        }
    }

}
</script>