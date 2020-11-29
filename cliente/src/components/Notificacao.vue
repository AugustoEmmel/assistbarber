<template>
  <v-badge :content="messages" :value="messages" color="red" overlap class="">
    <v-icon large class="">
      mdi-bell
    </v-icon>
  </v-badge>
</template>

<script>
export default {
  data() {
    return {
      messages: 1,
      show: false,
    };
  },
};
</script>
