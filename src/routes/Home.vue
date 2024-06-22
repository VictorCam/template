<script setup>
import { useCounterStore, useToastStore } from "../store";
import { ref } from "vue";
import utils from '../utils';
const store = useCounterStore();
const toastStore = useToastStore();
let toasts = toastStore.toasts;

let modal = ref(null)

const showHide = (value) => {
  modal.value != value ? modal.value = value : modal.value = null;
};
</script>

<template>
  <div>
    <NavHeader />
    <p>count: {{ store.count }}</p>
    <p>Double Count: {{ store.doubleCount }}</p>
    <div class="flex flex-wrap gap2.5 p2">
      <button class="main-button" @click="store.increment">{{ $t('Increment') }}</button>
      <button @click="utils.addItem(toasts, { message: 'test4', type: 'success' })" class="main-button">{{ $t('Create Toast') }}</button>
      <button class="main-button" @click="showHide('modal')">Show modal</button>
      <router-link to="/Page">{{ $t('Page') }}</router-link>
      <router-link to="aewoifj">{{ $t('Bad Link') }}</router-link>
    </div>

    <!-- Toasts -->
    <div class="flex flex-col absolute m2.5 left-0 bottom-0">
      <TransitionGroup name="list" tag="Toast">
        <Toast v-for="toast in toasts" :key="toast.id" :id="toast.id"
        :message="toast.message" :type="toast.type" />
      </TransitionGroup>
    </div>

    <!-- Modal -->
    <Transition name="fade">
      <div v-if="modal === 'modal'" class="center wfit z-99" @click="showHide">
        <div class="bg-[var(--white)] b b-solid mxauto rd-3" @click="$event.stopPropagation()">
          <button class="float-right" @click="showHide">
            <div class="close svg-bw py1"></div>
          </button>
          <div class="text-center p5">
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </Transition>
    <Transition name="fade">
      <div v-if="modal === 'modal'" class="absolute bg-black/80 z-1 inset-0"></div>
    </Transition>
  </div>
</template>