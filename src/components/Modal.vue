<script setup>
import { ref } from "vue";
import utils from "../utils";
const modal = ref(null);

defineProps({
  message: String,
  modal: Boolean
});

</script>

<template>
  <div ref="modal" class="modal">
    <div class="pos-modal scale-in-center">
      <button class="svg-button" @click="utils.toggleHidden(modal)">
        <div class="close svg-bw"></div>
      </button>
      <div class="content">{{ message }}</div>
    </div>
  </div>
</template>

<style scoped>
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
}

.content {
  padding: 20px;
}
</style>
