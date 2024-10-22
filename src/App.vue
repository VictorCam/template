<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <TopBar />
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition || 'fade'" :mode="route.meta.transitionMode || 'out-in'">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>