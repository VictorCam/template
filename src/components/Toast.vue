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
    // replace this eventually with animationend or transitionend
    toast.value.classList.remove('scale-in-center');
    toast.value.classList.add('scale-out-center');
    await new Promise(resolve => setTimeout(resolve, 300))
    toast.value.classList.add('shrink');
    await new Promise(resolve => setTimeout(resolve, 300))
    utils.removeItemById(toasts, id)
};

const toast = ref();

</script>

<template>
    <div ref="toast" :class="{ type }" class="toast expand scale-in-center">
        <button class="svg-button" @click="hideToast(id)">
            <div class="close svg-bw"></div>
        </button>
        <p>{{ message }}</p>
    </div>
</template>

<style scoped>
.toast {
    position: relative;
    width: fit-content;
    height: 0;
    margin-bottom: 10px;
    z-index: 9999;
    background: var(--black);
    border: 1px solid var(--white);
    border-radius: 10px;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.expand {
    transition: height 0.3s ease-out, padding 0.3s ease-out;
    height: 35px;
    padding: 10px;
    font-size: medium;
}

/* transition the width to 0 */
.toast {
    transition: width 0.2s ease-out;
}

.shrink {
    height: 0;
    padding: 0;
    font-size: 0;
    border: none;
    transition: height 0.3s ease-in, padding 0.3s ease-in;
}

.close,
.svg-button {
    padding: 0px;
}

p {
    padding: 0 20px;
}

.error {
    background: red;
}

.svg-button {
    position: absolute;
    margin: 5px;
    right: 0;
    top: 0;
}
</style>