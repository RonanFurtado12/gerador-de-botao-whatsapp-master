<template>
  <v-app class="">
    <Navbar :logo="logo_src" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },

  data() {
    return {
      logo_src: "/img/logo.png",
    };
  },
};
</script>
