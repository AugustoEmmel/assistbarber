<template>
  <v-dialog v-model="dialog" max-width="800" hide-overlay>
    <template v-slot:activator="{on,attrs}">
      <v-btn class="mt-1" v-bind="attrs" v-on="on" small>Inserir Serviços</v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>insira os Serviços</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="pa-5"></v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>