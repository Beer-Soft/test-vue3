<template>
  <h1>Este sera una peticion de un rest api</h1>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("onmounted API");
});
</script>
<style>
h1 {
  color: red;
}
.positive {
  color: green;
}
.negative {
  color: red;
}
</style>
