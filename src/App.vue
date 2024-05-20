<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition || 'bonuce'">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
.fade-enter-active {
  animation: fade 175ms;
}

.fade-leave-active {
  animation: fade 175ms reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* dark mode */
:root,
:root.light {
  --white: rgb(255, 255, 255);
  --gray: #cccccc;
  --black: rgb(23, 23, 23);
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
}

/* light mode */
:root.dark {
  --white: black;
  --black: white;
}

@media (prefers-color-scheme: dark) {
  .bg-bw {
    background: var(--black);
  }

  .color-bw {
    color: var(--white);
  }

  .svg-bw {
    color: var(--white);
  }
}

html,
body {
  color: var(--white);
  background: var(--black);
  overflow-x: hidden;
  height: 100%;
  width: 100%;
}
</style>
