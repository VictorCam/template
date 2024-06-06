<script setup>
import { ref, onMounted } from 'vue';
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
    toast.value.classList.remove('scale-in-center');
    toast.value.classList.add('scale-out-center');
    await utils.waitForAnimation(toast.value);
    toast.value.classList.add('shrink');
    await utils.waitForAnimation(toast.value);
    utils.removeItemById(toasts, id)
};

const toast = ref();

</script>

<template>
    <div ref="toast" :class="{ type }"
        class="toast w-fit h-15 z-[99] b b-solid bc-[var(--white)] bg-[var(--black)] flex items-center mb-2 p-1 rounded-3 scale-in-center">
        <button class="absolute m-1 right-0 top-0 p-0" @click="hideToast(id)">
            <div class="close svg-bw"></div>
        </button>
        <p class="pl-5 pr-5">Lorem</p>
    </div>
</template>

<style scoped>
.toast {
    transition: 300ms ease-in;
}

.no-animation * {
    transition: none !important;
    transform: none !important;
    animation: none !important;
}
</style>