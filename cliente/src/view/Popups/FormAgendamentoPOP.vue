<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab class="mt-5 mb-n5" v-bind="attrs" v-on="on" small> </v-btn>
    </template>
    <v-card
      ><v-toolbar dark color="primary">
        <v-toolbar-title>Agendamento</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <template>
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-layout row wrap class="pa-3">
            <v-container>
              <v-text-field
                label="Nome"
                v-model="name"
                :rules="nameRules"
                :counter="10"
                required
              >
              </v-text-field>
              <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
              >
              </v-text-field>
              <v-text-field
                label="Endereço"
                v-model="endereco"
                required
                :rules="enderecoRules"
                oulined
              >
              </v-text-field>
              <v-btn @click="submit" :disabled="!valid">
                submit
              </v-btn>
              <v-btn @click="clear">
                clear
              </v-btn>
            </v-container>
          </v-layout>
        </v-form>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    dialog: false,
    name: "",

    endereco: "",
    data: "",
    hora: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
    enderecoRules: [(v) => !!v || "endereço is required"],
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email,
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
