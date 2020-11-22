<template>
<nav>
    <v-app-bar app color="blue darken-4">
        <v-icon @click="drawer = !drawer">mdi-menu</v-icon>
        <v-spacer></v-spacer>
        <v-app-bar-title class="text-uppercase black--text">
            <span class="font-weight-light white--text">assist</span>
            <span class="black--text">Barber</span>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn small text>
            <span>Sair</span>
            <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer dark v-model="drawer" app class="blue darken-4">
        <v-layout column align-center>
            <!--ICONE DO USUARIO -->
            <v-flex class="mt-5">
                <v-avatar size="50">
                    <v-icon class="mdi-48px mdi-dark white">mdi-account</v-icon>
                </v-avatar>
            </v-flex>
            <!--NOME DO USUARIO -->
            <p class="white--text subheading mt-2">{{ nomeUsuario }}</p>
        </v-layout>
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="material-icons">{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-title-content>
                    <v-list-item-title class="text--white">{{
              link.text
            }}</v-list-item-title>
                </v-list-title-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>
import db, {dbAuth} from "../../components/FirebaseInit";

export default {
    data() {
        return {
            nomeUsuario: '',
            drawer: false,
            links: [{
                    icon: "mdi-map",
                    text: "Principal",
                    route: "/",
                },
                {
                    icon: "mdi-view-dashboard",
                    text: "Perfil",
                    route: "/edperfilv",
                },
                {
                    icon: "mdi-folder",
                    text: "Agenda",
                    route: "/agendav",
                },
                {
                    icon: "mdi-chart-bar",
                    text: "Relatórios",
                    route: "/relatoriov",
                },
                {
                    icon: "mdi-history",
                    text: "Histórico",
                    route: "/historicov",
                },
                {
                    icon: "mdi-information",
                    text: "Notificações",
                    route: "/about",
                },
                {
                    icon: "mdi-information",
                    text: "Sobre",
                    route: "/about",
                },
                {
                    icon: "mdi-information",
                    text: "Validar Cadastro",
                    route: "/validacadastrov",
                },
            ],
        };
    },
    methods:{
        //puxa nome usuario do banco
        getNomeUsuario(){
            const idUsuario = dbAuth.currentUser.uid;
            let docUsuarios = db.collection('usuarios').doc(idUsuario);
            let getDoc = docUsuarios.get()
            .then( doc =>{
                if(!doc.exists){
                    console.log('Não existe esse documento!')
                }else{
                    this.nomeUsuario = doc.data().nome;
                }
            }).catch(error =>{
                console.log('Erro ao pegar documento: ', error);
            })
        }
    },
    mounted(){
        this.getNomeUsuario();
    }
};
</script>