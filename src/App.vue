<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView></RouterView>
</template>

<style>
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
  color: var(--black);
}

/* updated */
@media (prefers-color-scheme: dark) {
  :root {
    --white: white;
    --black: black;
  }
}

:root.dark {
  --white: black;
  --black: white;
}

@media (prefers-color-scheme: dark) {
  :root {
    color: var(--white);
    background: var(--blue);
  }

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

body {
  max-width: 1800px;
  margin: 0 auto !important;
}
</style>
