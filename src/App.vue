<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <TopBar />
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition || 'bonuce'">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>