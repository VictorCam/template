<script setup>
import { useCounterStore, useToastStore } from "../store";
import { ref, onMounted, reactive } from "vue";
import utils from '../utils';
import { useScrollLock, useToggle } from '@vueuse/core'
const store = useCounterStore()
const toastStore = useToastStore()
let toasts = toastStore.toasts;

let isLocked = useScrollLock(document.body)
let toggleLock = useToggle(isLocked)
let modal = ref(null)

const showHide = (value) => {
  modal.value != value ? modal.value = value : modal.value = null;
  toggleLock()
}
</script>

<template>
  <div class="absolute">
    <div class="flex flex-wrap items-center gap2.5 p2">
      <button class="btn" @click="store.increment">Increment</button>
      <button class="btn" @click="utils.addItem(toasts, { message: 'test4', type: 'success' })">Make Toast</button>
      <button class=btn @click="showHide('modal')">Show modal</button>
    </div>
    <div class="p2">
      <p>count: {{ store.count }}</p>
      <p>Double Count: {{ store.doubleCount }}</p>
    </div>

    <!-- Toasts -->
    <div class="flex z3 flex-col fixed m2.5 left-0 bottom-0 flex-grow-1">
      <TransitionGroup name="list" tag="Toast">
        <Toast v-for="toast in toasts" :key="toast.id" :id="toast.id" :message="toast.message" :type="toast.type" />
      </TransitionGroup>
    </div>
    <!-- Modal -->
    <Transition name="fade">
      <div v-if="modal === 'modal'" class="center fixed overflow-hidden wfit z-9999" @click="showHide">
        <div class="dark:bg-dark-300 bg-white mxauto rd-3" @click="$event.stopPropagation()">
          <button class="absolute right-0 top-0 pr2 close svg-c m1 i-btn" @click="showHide()"></button>
          <div class="text-center p7">
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </Transition>
    <Transition name="fade">
      <div v-if="modal === 'modal'" class="fixed bg-black/80 z-10 inset-0 w100vw h100vh"></div>
    </Transition>
  </div>
</template>