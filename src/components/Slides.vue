<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const imgList = [
    'http://via.placeholder.com/350x150',
    'https://placehold.co/600x400/png',
    'http://via.placeholder.com/800x152'
];

let currentImg = ref(0);
let intervalId;

function next() {
    currentImg.value++;
    if (currentImg.value >= imgList.length) {
        currentImg.value = 0;
    }
}

function prev() {
    currentImg.value--;
    if (currentImg.value < 0) {
        currentImg.value = imgList.length - 1;
    }
}

onMounted(() => {
    intervalId = setInterval(next, 3000); // Change image every 3 seconds
});

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>

<template>
    <div class="slideshow">
        <div v-for="number in [currentImg]" :key="number">
            <img :src="imgList[currentImg]" />
        </div>
    </div>
    <div class="slide-buttons">
        <button class="main-button" @click="prev">prev</button>
        <button class="main-button" @click="next">next</button>
    </div>
</template>
   

<style scoped>
.slide-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.slideshow {
    display: grid;
    justify-content: center;
    overflow: hidden;
    object-fit: contain;
}


img {
    object-fit: contain;
    display: flex;
    justify-content: center;
}

.slide-leave-active,
.slide-enter-active {
    transition: 1s;
}

.slide-enter {
    transform: translateX(100%);
}

.slide-leave-to {
    transform: translateX(-100%);
}
</style>
