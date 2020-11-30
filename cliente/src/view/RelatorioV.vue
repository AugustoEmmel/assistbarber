<template>
  <div class="RelatorioV">
    <h1 class="ml-3">RELATÓRIOS</h1>
    <v-container class="my-2"></v-container>
    <v-container>
      <formAgendamentoPOP />
    </v-container>
  </div>
</template>

<script>
import FormAgendamentoPOP from "./Popups/FormAgendamentoPOP.vue";

export default {
  components: {
    FormAgendamentoPOP,
  },
};
</script>
