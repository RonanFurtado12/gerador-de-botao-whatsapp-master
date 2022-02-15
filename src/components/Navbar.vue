<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" id="Logo" />
    </router-link>
    <nav>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Script</span>
        <span>Generator</span>
      </v-toolbar-title>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["logo"],
  data() {
    return {
      drawer: true,
    };
  },
};
</script>
<style scoped>
#nav {
  padding: -7px;
  display: flex;
  justify-content: flex;
  align-items: center;
  height: 79px;
  background-color: rgba(248, 248, 248, 0.247);
}
</style>