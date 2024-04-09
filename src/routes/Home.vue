<script setup>
import { useCounterStore, useToastStore } from "../store";

const store = useCounterStore();

const toastStore = useToastStore();
let toasts = toastStore.toasts;

import { onMounted, ref } from "vue";
import utils from '../utils';

const activeModal = ref('');

const showModal = (modalName) => {
  activeModal.value = modalName;
};

const closeModal = () => {
  activeModal.value = '';
};

onMounted(() => {
  let modal = ref()
})

</script>

<template>
  <NavHeader />
  <Modal v-if="activeModal === 'modal1'" :message="'Hello World'" />
  <Modal v-if="activeModal === 'modal2'" :message="'Goodbye World'" />
  <p>Count: {{ store.count }}</p>
  <p>Double Count: {{ store.doubleCount }}</p>
  <div class="space">
    <button class="main-button" @click="store.increment">Increment</button>
    <button @click="utils.addItem(toasts, { message: 'test4', type: 'info' })" class="main-button">Create
      Toast</button>
    <button class="main-button" @click="showModal('modal1')">Show Modal</button>
    <button class="main-button" @click="showModal('modal2')">Show Modal</button>
  </div>
  <Slide />
  <div class="toast-stack">
    <Toast v-for="toast in toasts" :key="toast.id" :id="toast.id" :message="toast.message" :type="toast.type" />
  </div>


  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
    <path fill="transparent" d="M0 0h1920v1080H0z"/>
    <g><animateTransform attributeName="transform" calcMode="spline" dur="8.33333s" keySplines="0 0 1 1;0 0 1 1;0 0 1 1;0 0 1 1" keyTimes="0;0;0.05;0.075;1" repeatCount="indefinite" type="translate" values="155.812 0;155.812 0;1109.35 0;1130.89 0;1130.89 0"/>
      <g><animateTransform attributeName="transform" calcMode="spline" dur="8.33333s" keySplines="0 0 1 1;0 0 1 1;0 0 1 1;0 0 1 1" keyTimes="0;0;0.05;0.075;1" repeatCount="indefinite" type="translate" values="0 179.551;0 179.551;0 142.214;0 811.414;0 811.414"/>
        <ellipse fill="red" stroke="#000" rx="67.494" ry="68.93"/>
      </g>
    </g>
  </svg> -->

  <!-- <Tabs /> -->
  <!-- <Nodes /> -->
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

.space {
  display: flex;
  padding: 15px;
  gap: 10px;
}
</style>