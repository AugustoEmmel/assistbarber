<template>
<div class="PerfilV">
    <!--conteudo pagina  -->
    <v-container>
        <!--FOTO  -->
        <v-card flat class="pa-3 blue darken-4">
            <v-layout row wrap>
                <v-flex xs5 sm5 class="mb-3">
                    <v-layout column align-center>
                        <v-flex>
                            <v-avatar size="100">
                                <v-img src="https://www.creativefabrica.com/wp-content/uploads/2019/08/Red-Samurai-E-Sports-Logo-by-ovoz.graphics.jpg"></v-img>
                            </v-avatar>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <!--AVALIAÇÂO  -->
                <v-flex xs6 sm5 class="ml-2">
                    <div class="white--text">Avaliação</div>
                    <v-rating v-model="rating" background-color="white" color="yellow"></v-rating>
                </v-flex>
                <!--AGENDAMENTO  -->
                <v-flex xs12 sm5 class="ml-5">
                    <div class="white--text ma-2">Agendamento</div>
                    <div class="ma-2">
                        <Agendamento />
                    </div>
                </v-flex>
                <!--SERVIÇOS  -->
                <v-flex xs12 sm12 md12 xl12 class="ml-5 pr-5">
                    <div class="white--text ma-2">Serviços</div>
                    <v-container fluid>
                        <v-textarea flat outlined="false" rounded background-color="blue darken-4" auto-grow cols="10" rows="5"></v-textarea>
                    </v-container>
                </v-flex>
                <!--SOBRE -->
                <v-flex xs12 sm12 md12 xl12 class="ml-5 pr-5">
                    <div class="white--text ma-2">Sobre</div>
                    <v-container fluid>
                        <v-textarea filled outlined rounded background-color="white" auto-grow cols="10" rows="5"></v-textarea>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-card>
    </v-container>
</div>
</template>

<script>
import Foto from "./Popups/FotoPOP";
import Servico from "./Popups/ServicoPOP";
import Agendamento from "./Popups/AgendamentoPOP";
export default {
    components: {
        Foto,
        Servico,
        Agendamento,
    },
    data: () => ({
        rating: 3,
    }),
};
</script>
