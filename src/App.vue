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

<style>
/* light mode */
:root,
:root.light {
  --white: white;
  --gray: #cccccc;
  --black: black;
  --yellow: #fff208;
  --strong-blue: #0d63f8;
  --purple: #9d00ff;
  --blue: #31a6fa;
  --green: #2f8e37;
  --pink: #ff2965;
  --red: #ab203c;
  --neutral: #905ba0;
  --splash: #00ffdb;
  --background-clr: #242424;
  font-family: Arial, Helvetica, sans-serif;
  color-scheme: light dark;
  background: var(--white);
  color: var(--white);
  overflow: hidden;
}

/* dark mode */
:root.dark {
  --white: black;
  --black: white;
}

@media (prefers-color-scheme: dark) {
  .bg-bw {
    background: var(--black);
    color: var(--white);
  }
}

@media (prefers-reduced-motion: reduce) {
  /* 
  *,
  *::before,
  *::after {
    transition: none !important;
    animation: none !important;
  } */
}

html,
body {
  color: var(--black);
  background: var(--white);
  overflow-x: hidden;
  height: 100%;
  width: 100%;
}
</style>
