<script setup>
import { useCounterStore } from "../store";
const store = useCounterStore();
</script>

<template>
  <h1>Home</h1>
  <p>Count: {{ store.count }}</p>
</template>
