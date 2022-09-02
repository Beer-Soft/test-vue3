<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

const name = "diego";
const activo = false;
const arrayFrutas = [
  {
    name: "Manzana",
    price: "12.00",
    description: "manzana roja",
    stock: 1,
  },
  {
    name: "Platano",
    price: "18.00",
    description: "Plantano macho",
    stock: 3,
  },
  {
    name: "Pera",
    price: "10.00",
    description: "Pera oaxaqueña",
    stock: 2,
  },
];

const arrayFavoritos = ref([]);

const handledClik = () => {
  console.log("me diste click maldito");
};

//reactividad
let counter = ref(0);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};

const reset = () => {
  counter.value = 0;
};

const add = () => {
  arrayFavoritos.value.push(counter.value);
};

const bloquearBtn = computed(() => {
  const numSearch = arrayFavoritos.value.find((num) => num === counter.value);
  if (numSearch == 0) return true;
  return numSearch ? true : false;
});
</script>

<template>
  <div class="container text-center mt-3">
    <h1>Hola mundo con {{ name.toUpperCase() }}</h1>
    <h1 v-if="activo">estoy activo</h1>
    <h1 v-else="!activo">estoy inactivo</h1>
    <ul>
      <template v-for="fruta in arrayFrutas" :key="fruta.name">
        <li v-if="fruta.stock > 0">{{ fruta.name }}-{{ fruta.price }}</li>
      </template>
    </ul>
    <button v-on:click="handledClik">activame 1</button>
    <button @click="handledClik">activame 1</button>

    <p>variables reactivas</p>
    <h2 :class="counter > 0 ? 'positive' : 'negative'">{{ counter }}</h2>
    <div class="btn-group">
      <button v-on:click="increment" class="btn btn-success">
        incrementar
      </button>
      <button v-on:click="decrement" class="btn btn-danger">decrementar</button>
      <button v-on:click="reset" class="btn btn-secondary">reset</button>
      <button v-on:click="add" :disabled="bloquearBtn" class="btn btn-primary">
        Add
      </button>
    </div>
    {{ arrayFavoritos }}
    <ul class="list-group">
      <li
        v-for="(num, index) in arrayFavoritos"
        :key="index"
        class="list-group-item"
      >
        {{ num }}
      </li>
    </ul>
  </div>
</template>

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
