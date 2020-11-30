<template>
  <div class="RelatorioV">
    <h1 class="ml-3">RELATÓRIOS</h1>
    <v-container class="my-2"><agendamento /></v-container>
    <v-container>
      <formAgendamentoPOP />
    </v-container>
  </div>
</template>

<script>
import Agendamento from "../components/Agendamento";
import FormAgendamentoPOP from "./Popups/FormAgendamentoPOP.vue";

export default {
  components: {
    Agendamento,
    FormAgendamentoPOP,
  },
};
</script>
