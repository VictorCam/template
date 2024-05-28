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
    <div class="flex gap-2.5 p-2">
      <button class="main-button" @click="store.increment">Increment</button>
      <button @click="utils.addItem(toasts, { message: 'test4', type: 'info' })" class="main-button">Create
        Toast</button>
      <button class="main-button" @click="modalTransition(); showHide('modal1')">Show Modal1</button>
      <button class="main-button" @click="showHide('modal2')">Show Modal2</button>
      <router-link to="/Page">Page</router-link>
      <router-link to="aewoifj">Bad link</router-link>
    </div>
    <!-- <Slides /> -->

    <div>
      <div class="flex flex-col absolute m-2.5 left-0 bottom-0">
        <Toast v-for="toast in toasts" :key="toast.id" :id="toast.id" :message="toast.message" :type="toast.type" />
      </div>
    </div>

    <!-- modal1 -->
    <div v-if="modal === 'modal1'" class="modal" @click="showHide">
      <div class="grid bg-[var(--black)] b b-solid bc-[var(--white)] max-w-[80vw] mx-auto rd-3 scale-in-center"
        @click="$event.stopPropagation()">
        <button class="justify-self-end p-2" @click="showHide">
          <div class="close svg-bw p-3"></div>
        </button>
        <div class="p-4 text-center text-balance">
          <p>
            testt
          </p>
        </div>
      </div>
    </div>

    <!-- modal2 -->
    <div v-if="modal === 'modal2'" class="modal" @click="showHide">
      <div class="grid bg-[var(--black)] b b-solid bc-[var(--white)] max-w-[80vw] mx-auto rd-3 scale-in-center"
        @click="$event.stopPropagation()">
        <button class="justify-self-end p-2" @click="showHide">
          <div class="close svg-bw p-3"></div>
        </button>
        <div class="text-center text-balance">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore adipisci, veniam amet eaque accusamus
            doloremque exercitationem assumenda enim eveniet neque porro ullam molestiae nulla tempore dolorem maiores
            aliquid aliquam atque.
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