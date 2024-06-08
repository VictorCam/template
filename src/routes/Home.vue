<script setup>
import { useCounterStore, useToastStore } from "../store";

const store = useCounterStore();

const toastStore = useToastStore();
let toasts = toastStore.toasts;

import { ref } from "vue";
import utils from '../utils';

let modal = ref(null)

const showHide = (value) => {
  modal.value != value ? modal.value = value : modal.value = null;
};

const modalTransition = async (e) => {
  let target = e.target;
  console.log(target)
  modal.value.classList.remove('scale-in-center');
  modal.value.classList.add('scale-out-center');
  await utils.waitForAnimation(modal.value);
  modal.value.classList.add('shrink');
  await utils.waitForAnimation(modal.value);
};
</script>

<template>
  <div>
    <NavHeader />
    <p>Count: {{ store.count }}</p>
    <p>Double Count: {{ store.doubleCount }}</p>
    <div class="flex flex-wrap gap2.5 p2">
      <button class="main-button" @click="store.increment">Increment</button>
      <button @click="utils.addItem(toasts, { message: 'test4', type: 'info' })" class="main-button">Create
        Toast</button>
      <!-- <button class="main-button" @click="showHide('modal1')">Show Modal1</button> -->
      <button class="main-button" @click="showHide('modal2')">Show Modal2</button>
      <router-link to="/Page">Page</router-link>
      <router-link to="aewoifj">Bad link</router-link>
    </div>

    <div class="flex flex-col absolute m2.5 left-0 bottom-0">
      <Toast v-for="toast in toasts" :key="toast.id" :id="toast.id" :message="toast.message" :type="toast.type" />
    </div>

    <!-- modal2 -->
    <div v-if="modal === 'modal2'" class="modal" @click="showHide">
      <div class="grid bg-[var(--white)] b b-solid max-w-[80vw] mx-auto rd-3 scale-in-center"
        @click="$event.stopPropagation()">
        <button class="absolute top-0 right-0" @click="showHide">
          <div class="close svg-bw pt1 pb1"></div>
        </button>
        <div class="text-center text-balance p10">
          <p>
            Lorem
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
/* modal */
.modal {
  --at-apply: absolute bg-black/80 grid z-[9999] w-screen h-screen justify-center items-center left-0 top-0;
  transition: background ease-in 0.3s;
}
</style>