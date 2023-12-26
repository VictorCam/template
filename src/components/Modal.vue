<script setup>
import { ref } from 'vue';
import utils from '../utils';
const modal = ref(null);
</script>

<template>
    <div ref="modal" class="modal hidden">
        <div class="pos-modal">
            <button class="svg-button" @click="utils.toggleHidden(modal)">
                <div class="close svg-bw"></div>
            </button>
            <div class="content"></div>
        </div>
    </div>
</template>

<style>
.modal {
    position: absolute;
    display: grid;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
}
</style>
