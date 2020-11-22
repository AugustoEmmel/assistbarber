<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../src/view/Layout/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {};
  }
};
</script>
