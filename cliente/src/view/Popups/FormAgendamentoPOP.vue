<template>
  <v-dialog v-model="dialog" max-width="550">
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab class="" v-bind="attrs" v-on="on" small>
        <v-icon>mdi-calendar-plus</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-toolbar dark color="primary">
        <v-spacer></v-spacer>
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
                label="Endereço"
                v-model="endereco"
                required
                :rules="enderecoRules"
                oulined
              >
              </v-text-field>
              <!--fim dos forms -->
              <!-- date -->
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Picker in dialog"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    required
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
              <!-- fim date -->
              <!-- hora -->

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
    modal: false,
    valid: true,
    dialog: false,
    name: "",
    endereco: "",
    date: "",

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],

    enderecoRules: [(v) => !!v || "endereço is required"],
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,

          email: this.endereco,
          date: this.date,
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
