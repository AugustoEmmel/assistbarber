<template>
  <v-container>
    <v-layout fluid text-lg-center align-left="true">
      <v-row class="justify-center">
        <v-col col12>
          <v-row class="align-end justify-center">
            <v-card class="elevation-10">
              <v-card-title class="blue darken-4">
                <v-spacer></v-spacer>
                <div>
                  <span class="font-weight-light white--text">CADASTRO</span>
                  <span class="black--text">BARBEIRO</span>
                </div>
                <v-spacer></v-spacer>
              </v-card-title>
              <v-form v-model="valid">
                <v-container>
                  <v-layout col="12" wrap>
                    <v-flex xs12 sm8 md8>
                      <v-text-field v-model="nome" clearable label="NOME" placeholder="NOME" outlined></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm8 md8>
                      <v-text-field v-model="cpf" clearable label="CPF" placeholder="CPF" outlined></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm8 md8>
                      <v-text-field
                        placeholder="E-mail"
                        v-model="email"
                        :rules="[rules.required, rules.email]"
                        label="E-mail"
                        required
                        outlined
                        clearable
                      ></v-text-field>
                    </v-flex>
                    <v-flex sm8 md8>
                      <v-file-input
                        v-model="certificados"
                        color="blue darken-2"
                        append-outer-icon="mdi-paperclip"
                        prepend-icon
                        label="Certificados"
                        multiple
                        placeholder="imagens dos Certificados"
                        outlined
                      >
                        <template v-slot:selection="{ index, text }">
                          <v-chip
                            v-if="index < 2"
                            color="blue  darken-4"
                            dark
                            label
                            small
                          >{{ text }}</v-chip>
                        </template>
                      </v-file-input>
                    </v-flex>
                  </v-layout>
                  <v-btn @click="enviarFormulario">Enviar Formulário</v-btn>
                </v-container>
              </v-form>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>


<script>
import db, { dbAuth } from "../components/FirebaseInit";

export default {
  data() {
    return {
      nome: '',
      cpf: '',
      email: '',
      certificados:'',
      valid: '',
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  methods:{
    enviarFormulario(){
      //Adiciona formulario do barbeiro ao banco
      db.collection("formularios")
      .doc(dbAuth.currentUser.uid)
      .set({
        nome: this.nome,
        cpf: this.cpf,
        email: this.email
      })
      //Confirma que enviou relatório e mostra pop-up de formulario enviado
      .then(docRef =>{
        console.log('Formulario enviado');
      })
      //Exibe erro no console
      .catch(error =>{
        console.error('Erro ao enviar formulario', error)
      })
    }
  },
  mounted(){
    //Resgata do gmail sugestões de email e nome
    this.email = dbAuth.currentUser.email;
    this.nome = dbAuth.currentUser.displayName;
    console.log(dbAuth.currentUser)
  }
};
</script>