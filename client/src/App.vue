<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import "./assets/global.css";
import Nav from "./components/nav/Nav.vue";

export default {
  name: "App",
  components: { Nav },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
