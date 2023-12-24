<script setup>
import { useCounterStore } from "../store";
const store = useCounterStore();
</script>

<template>
  <NavHeader />
  <h1>Home</h1>
  <p>Count: {{ store.count }}</p>
</template>
