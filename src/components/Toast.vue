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
    // if reduced motion then ignore
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        utils.removeItemById(toasts, id)
        return
    }
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
        class="toast w-fit h-15 z-[99] b b-solid bg-[var(--white)] flex items-center mb-2 p-1 rounded-3 ">
        <button class="absolute m-1 right-0 top-0 p-0" @click="hideToast(id)">
            <div class="svg-bw close"></div>
        </button>
        <p class="pl-5 pr-5">Lorem</p>
    </div>
</template>

<style scoped>
.toast {
    transition: 300ms ease-in;
}
</style>