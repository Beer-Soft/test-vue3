<!-- <script setup>
import Menu from "./components/Menu.vue";
import { ref, onMounted } from "vue";

onMounted(() => {
  console.log("mounted spa"); // 0
});
</script> -->

<template>
  <nav-menu></nav-menu>
  <router-view></router-view>
</template>
<script>
import NavMenu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    NavMenu,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
