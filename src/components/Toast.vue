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
    utils.removeItemById(toasts, id)
};

const toast = ref();

</script>

<template>
    <div ref="toast" class="toast wfit h15 z99 b b-solid bg-[var(--white)] flex items-center mb2 p1 rd-3 ">
        <button class="absolute m1 right-0 top-0 p-0" @click="hideToast(id)">
            <div class="svg-bw close"></div>
        </button>
        <p class="pl5 pr5">Lorem</p>
    </div>
</template>

<style scoped>
.toast {
    transition: 300ms ease-in;
}
</style>