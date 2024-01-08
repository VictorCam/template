<script setup>
import { useCounterStore } from "../store";
const store = useCounterStore();
</script>

<template>
  <NavHeader />
  <Modal />
  <p>Count: {{ store.count }}</p>
</template>