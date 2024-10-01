<script setup>
import utils from '../utils';
import { useToastStore } from '../store'
let ToastStore = useToastStore();
let toasts = ToastStore.toasts;

const props = defineProps({
    title: String,
    color: String,
    id: Number,
    message: String,
});
</script>

<template>
    <div class="relative wfit h15 flex items-center mb2 p1 rd-3" :class="color === 'success' ? 'bg-green-400' : 'bg-red-400'">
        <button class="absolute m1 right-0 top-0 i-material-symbols-close i-btn" @click="utils.removeItemById(toasts, id)"></button>
        <p class="pl5 pr5">{{ message }}</p>
    </div>
</template>