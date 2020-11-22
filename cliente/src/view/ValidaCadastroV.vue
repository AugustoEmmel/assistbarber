<template>
<div class="ValidaCadastro">
    <h1 class="ml-3">Validar Cadastro</h1>
    <v-container class="my-2">
        <v-card flat color="blue" class="pl-7 pt-3 pb-2 mb-1" v-for="(cadastro) in cadastros" :key="cadastro.id">
            <v-layout row wrap>
                <v-flex xs3 sm md3>
                    <div class="caption black--text">Nome</div>
                    <div >{{ cadastro.nome }}</div>
                </v-flex>
                <v-flex xs3 sm4 md3>
                    <div class="caption black--text">CPF</div>
                    <div >{{ cadastro.cpf }}</div>
                </v-flex>
                <v-flex xs6 sm4 md6>
                    <div class="caption black--text">Email</div>
                    <div id="email">{{ cadastro.email }}</div>
                </v-flex>
                <v-card-actions>
                    <v-btn icon @click="show = !show">
                        <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-expand-transition>
                    <div v-show="show">
                        <v-card-text>
                            CERTIFICADOS
                        </v-card-text>
                        <v-flex>
                            <v-card-actions>
                                <v-btn small @click="recusarFormulario(cadastro.id)">Recusar</v-btn>
                                <v-btn small @click="aceitarFormulario(cadastro.id)">Aceitar</v-btn>
                            </v-card-actions>
                        </v-flex>
                    </div>
                </v-expand-transition>
            </v-layout>
        </v-card>
    </v-container>
</div>
</template>

<script>
import db from "../components/FirebaseInit";
export default {
    data() {
        return {
            show: false,
            loading: true,
            cadastros: [],
        };
    },
    computed:{
        
    },
    methods:{
        deletaFormulario(id){
            db.collection('formularios').doc(id).delete();
        },
        //Pega Formulario, insere no banco como usuario
        aceitarFormulario(id) {
            let docFormularios = db.collection('formularios');
            let getDoc = docFormularios.doc(id).get().then( doc =>{
                if(!doc.exists){
                    console.log('Não existe esse documento!')
                }else{
                    db.collection("usuarios")
                        .doc(id)
                        .set({
                        nome: doc.data().nome,
                        email: doc.data().email
                    });
                }
                this.deletaFormulario(id);
                
            }).catch(error =>{
                console.log('Erro ao pegar documento: ', error);
            })
            
        },
        //Recusa o cadastro do barbeiro como usuario
        recusarFormulario(id){
            this.deletaFormulario(id);
        },
        observaListaFormularios(){
            db.collection('formularios').onSnapshot(res =>{
                //Verifica mudanças nos documentos
                const mudancas = res.docChanges();
                mudancas.forEach(mudanca =>{
                    //Caso seja adicionado documento, adiciona ao array Cadastros atualizando UI
                    if(mudanca.type === 'added'){
                        this.cadastros.push({
                            ...mudanca.doc.data(),
                            id: mudanca.doc.id
                        })
                    //Caso seja removido documento, remove ao array Cadastros atualizando UI
                    } else if (mudanca.type === 'removed'){
                        this.cadastros.splice(this.cadastros.indexOf(mudanca.doc.id), 1);
                        console.log(this.cadastros);
                    }
                })
            })
        }
    },
    created(){
        //Busca lista de formularios para 
        this.observaListaFormularios();
    }
};
</script>
