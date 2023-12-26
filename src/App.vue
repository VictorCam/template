<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView></RouterView>
</template>

<style>
:root {
  --white: #f5f5f5;
  --gray: #cccccc;
  --black: #0f1115;
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
}

@media (color-scheme: light) {
  :root {
    color: var(--black);
    background: var(--white);
  }

  .svg-bw {
    color: var(--black);
  }
}

@media (color-scheme: dark) {
  :root {
    color: var(--white);
    background: var(--white);
  }

  .svg-bw {
    color: var(--white);
  }
}

html,
body {
  overflow-x: hidden;
  height: 100%;
  width: 100%;
}

body {
  max-width: 1800px;
  margin: 0 auto !important;
}
</style>
