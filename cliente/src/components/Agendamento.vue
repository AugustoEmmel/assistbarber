<template>
  <v-dialog v-model="dialog" max-width="800" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab class="mt-5 mb-n5" v-bind="attrs" v-on="on" small
        ><v-icon>mdi-calendar-plus</v-icon>
      </v-btn>
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
      <v-card-text class="pa-5"
        ><template>
          <v-layout wrap>
            <v-flex xs12 class="mb-3">
              <v-sheet height="500">
                <v-calendar
                  :attributes="attributes"
                  ref="calendar"
                  v-model="start"
                  :type="type"
                  :end="end"
                  color="primary"
                  locale="pt-pr"
                >
                </v-calendar>
              </v-sheet>
            </v-flex>

            <v-flex sm4 xs6 class="text-sm-left text-xs-center ">
              <v-btn @click="$refs.calendar.prev()">
                <v-icon dark left>
                  mdi-arrow-left
                </v-icon>
                Prev
              </v-btn>

              <v-btn @click="$refs.calendar.next()">
                Next
                <v-icon right dark>
                  mdi-arrow-right
                </v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </template>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
//teste
<script>
export default {
  data: () => ({
    type: "month",
    start: "2019-01-01",
    end: "2019-01-06",
    dialog: false,

    methods: {
      formAgendar() {
        alert("testando ");
      },
    },
  }),
};
</script>
