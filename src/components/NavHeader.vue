<script setup>
import { ref, computed, onMounted, watch, watchEffect } from "vue";
import utils from "../utils";

let links = [
  {
    name: "Link1",
    href: "#Link1",
  },
  {
    name: "Link2",
    href: "#Link2",
  },
];

let isLight = ref(false);
let isNavVisible = ref(false);
let navElement = ref(null);
let isNavAnimationComplete = ref(true);

let currentIcon = computed(() => isNavVisible.value ? 'close rotate-z-0' : 'burger rotate-z-360');
let currIconTheme = computed(() => isLight.value ? 'sun' : 'moon');

let showSidebar = computed(() => {
  if (isNavVisible.value) {
    isNavAnimationComplete.value = false;
    return 'scale-in-center';
  }
  return !isNavAnimationComplete.value ? 'scale-out-center' : '<sm:hidden';
});

// use the <sm:hidden when the animation of scale-out-center is complete
watch(isNavVisible, async (newValue) => {
  if (newValue === false) {
    await new Promise(resolve => setTimeout(resolve, 200));
    isNavAnimationComplete.value = true;
  }
})

let rootElement = document.documentElement;

function loadSavedTheme() {
  // change the theme
  if (localStorage.getItem('theme') === 'light') {
    rootElement.classList.remove("dark")
    rootElement.classList.add("light")
    isLight.value = true
    return
  }
  rootElement.classList.remove("light")
  rootElement.classList.add("dark")
  isLight.value = false
}

const toggleTheme = () => {
  let theme = rootElement.classList.contains("dark") ? "dark" : "light";
  if (theme === "light") {
    rootElement.classList.remove("light")
    rootElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    isLight.value = false
    return
  }
  rootElement.classList.remove("dark")
  rootElement.classList.add("light")
  localStorage.setItem("theme", "light")
  isLight.value = true
}

const toggleSidebar = () => {
  isNavVisible.value = !isNavVisible.value
}

onMounted(() => {
  loadSavedTheme()
})
</script>

<template>
  <header class="outline-1 outline-solid relative z-[99]">
    <div class="mx2 flex items-center gap2 p1 h8 ">
      <div class="svg-bw tmp p2 mr-auto"></div>
      <button @click="toggleTheme()" class="p-1" :aria-pressed="isLight">
        <div class="svg-color p1 transition duration-300 ease-in" :class="currIconTheme"></div>
      </button>
      <button @click="toggleSidebar()" class="sm:hidden p-1 transition duration-300 ease-in" :class="currentIcon"
        :aria-pressed="isNavVisible">
        <div class="svg-color p1 transition duration-300 ease-in"></div>
      </button>
      <nav ref="navElement" :class="showSidebar"
        class="<sm:fixed bottom-0 left-0 right-0 z--1 bg-[var(--white)] p1 <sm:h[calc(100vh-3rem)]">
        <ul class="flex flex-row gap3 lt-sm:flex-col m0">
          <li v-for="link in links">
            <div class="grid justify-items-center">
              <div class="flex items-center">
                <div class="svg-bw tmp link-icons sm:hidden"></div>
                <a :href="link.href">
                  <span>{{ link.name }}</span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>