<script setup>
import { useCounterStore, useToastStore } from "../store";

const store = useCounterStore();

const toastStore = useToastStore();
let toasts = toastStore.toasts;

import { ref } from "vue";
import utils from '../utils';

import { register } from 'swiper/element/bundle';
register();

let modal = ref(null)

const showHide = (value) => {
  modal.value != value ? modal.value = value : modal.value = null;
};

</script>

<template>
  <div>
    <NavHeader />
    <p>Count: {{ store.count }}</p>
    <p>Double Count: {{ store.doubleCount }}</p>
    <div class="space">
      <button class="main-button" @click="store.increment">Increment</button>
      <button @click="utils.addItem(toasts, { message: 'test4', type: 'info' })" class="main-button">Create
        Toast</button>
      <button class="main-button" @click="showHide('modal1')">Show Modal1</button>
      <button class="main-button" @click="showHide('modal2')">Show Modal2</button>
      <router-link to="/Page">Page</router-link>
      <router-link to="aewoifj">Bad link</router-link>
    </div>

    <div class="slides">
      <swiper-container :centered-slides="true" :slides-per-view="3" :autoplay="{ delay: 2500 }" :loop="true">
        <swiper-slide v-for="n in  5" :key="n">Slide {{ n }}</swiper-slide>
      </swiper-container>
    </div>

    <div>
      <div class="toast-stack">
        <Toast v-for="toast in toasts" :key="toast.id" :id="toast.id" :message="toast.message" :type="toast.type" />
      </div>
    </div>

    <!-- modal1 -->
    <div v-if="modal === 'modal1'" class="modal" @click="showHide">
      <div class=" pos-modal scale-in-center" @click="$event.stopPropagation()">
        <button class="svg-button" @click.stop="showHide">
          <div class="close svg-bw"></div>
        </button>
        <div class="content">
          <p>
            Modal1
          </p>
        </div>
      </div>
    </div>

    <!-- modal2 -->
    <div v-if="modal === 'modal2'" class="modal" @click="showHide">
      <div class=" pos-modal scale-in-center" @click="$event.stopPropagation()">
        <button class="svg-button" @click="showHide">
          <div class="close svg-bw"></div>
        </button>
        <div class="content">
          <p>
            Modal2
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.toast-stack {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 10px;
}

.slides {
  text-align: center;
}

.space {
  display: flex;
  padding: 15px;
  gap: 10px;
}

/* modal stuff */
.modal {
  position: absolute;
  display: grid;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  transition: background-color ease-in 0.3s;
}

.svg-button {
  justify-self: end;
  padding: 5px;
}

.pos-modal {
  display: grid;
  background: var(--black);
  border: 1px solid var(--white);
  border-radius: 10px;
  max-width: 80vw;
  margin: 0 auto;
}

.content {
  padding: 20px;
}
</style>