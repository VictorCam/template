<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <!-- grab reduce motion value -->
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition || 'bonuce'">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>