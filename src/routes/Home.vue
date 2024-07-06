<script setup>
import { useCounterStore, useToastStore } from "../store";
import { ref, onMounted } from "vue";
import utils from '../utils';
import { useScrollLock, useImage } from '@vueuse/core'
const store = useCounterStore();
const toastStore = useToastStore();
let toasts = toastStore.toasts;

let isLocked = useScrollLock(document.body)

let modal = ref(null)

const showHide = (value) => {
  modal.value != value ? modal.value = value : modal.value = null;
  isLocked.value = !isLocked.value
};

import image from '../assets/IMG_0005.jpg';
const { isLoading, error } = useImage({ src: image })

</script>

<template>
  <div>
    <NavHeader />
    <p><b>count</b>: {{ store.count }}</p>
    <p>Double Count: {{ store.doubleCount }}</p>
    <div class="flex flex-wrap items-center gap2.5 p2">
      <button class="btn" @click="store.increment">{{ $t('Increment') }}</button>
      <button class="btn" @click="utils.addItem(toasts, { message: 'test4', type: 'success' })">{{
      $t('CreateToast') }}</button>
      <button class=btn @click="showHide('modal')">Show modal</button>
      <router-link to="/Page">{{ $t('Page') }}</router-link>
      <router-link to="aewoifj">{{ $t('BadLink') }}</router-link>
    </div>

    <div v-if="isLoading" class="placeholder w60 h40"></div>
    <div v-else-if="error" class="bg-gray w60 h40 flex items-center">
      <p class="mx-auto">Failed to load image</p>
    </div>
    <img class="w60 h40" v-else :src=image />

    <!-- Toasts -->
    <div class="flex flex-col fixed m2.5 left-0 bottom-0">
      <TransitionGroup name="list" tag="Toast">
        <Toast v-for="toast in toasts" :key="toast.id" :id="toast.id" :message="toast.message" :type="toast.type" />
      </TransitionGroup>
    </div>
    <!-- Modal -->
    <Transition name="fade">
      <div v-if="modal === 'modal'" class="center fixed overflow-hidden wfit z-99" @click="showHide">
        <div class=".dark:bg-dark bg-white b b-solid mxauto rd-3" @click="$event.stopPropagation()">
          <button class="absolute right-0 top-0 pr2" @click="showHide()">
            <div class="close svg-c py1"></div>
          </button>
          <div class="text-center p7">
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </Transition>
    <Transition name="fade">
      <div v-if="modal === 'modal'" class="fixed bg-black/80 z-1 inset-0 w100vw h100vh"></div>
    </Transition>
  </div>
</template>

<style>
.placeholder {
  background: linear-gradient(270deg, #454343, #8a8686);
  background-size: 400% 400%;
  animation: backgroundAnimation 1.5s ease infinite;
}

@keyframes backgroundAnimation {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
