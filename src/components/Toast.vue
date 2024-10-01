<script setup>
import utils from '../utils';
import { useToastStore } from '../store'
let ToastStore = useToastStore();
let toasts = ToastStore.toasts;

const props = defineProps({
    title: String,
    type: String,
    id: Number,
    message: String,
});

const hideToast = async (id) => {
    utils.removeItemById(toasts.value, id)
};
</script>

<template>
    <div class="relative bg-base-100 wfit h15 flex items-center mb2 p1 rd-3 ">
        <button class="absolute m1 right-0 top-0 i-material-symbols-close i-btn" @click="hideToast(id)"></button>
        <p class="pl5 pr5">{{ message }}</p>
    </div>
</template>