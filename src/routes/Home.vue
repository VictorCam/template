<script setup>
import { useCounterStore } from "../store";
const store = useCounterStore();
import { onMounted } from "vue";

onMounted(async () => {
})
</script>


<template>
  <NavHeader />
  <Modal />
  <p>Count: {{ store.count }}</p>
  <p>Double Count: {{ store.doubleCount }}</p>
  <button class="main-button" @click="store.increment">Increment</button>
</template>

<style></style>