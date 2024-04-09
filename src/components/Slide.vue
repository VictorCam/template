<script setup>
import { register } from 'swiper/element/bundle';
register();
</script>

<template>
  <div class="slides">
    <swiper-container :centered-slides="true" :slides-per-view="3" :autoplay="{ delay: 2500 }" :loop="true">
      <swiper-slide v-for="n in  5" :key="n">Slide {{ n }}</swiper-slide>
    </swiper-container>
  </div>
</template>


<style scoped>
.slides {
  text-align: center;
}
</style>