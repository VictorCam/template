<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from "vue";
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


let currentIcon = computed(() => isNavVisible.value ? 'close rotate-z-0' : 'burger rotate-z-360');
let currIconTheme = computed(() => isLight.value ? 'sun' : 'moon');

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

const toggleSidebar = async (enterAnimation, exitAnimation) => {
  isNavVisible.value = !isNavVisible.value
  if (isNavVisible.value) {
    navElement.value.classList.toggle('<sm:hidden')
    navElement.value.classList.remove(exitAnimation)
    navElement.value.classList.add(enterAnimation)
    return
  }
  navElement.value.classList.remove(enterAnimation)
  navElement.value.classList.add(exitAnimation)
  await utils.waitForAnimation(navElement.value)
  navElement.value.classList.toggle('<sm:hidden')
  navElement.value.classList.remove(exitAnimation)
}

onMounted(() => {
  loadSavedTheme()
})
</script>

<template>
  <header class="outline-1 outline-solid relative z-[99]">
    <div class="mx2 flex items-center gap2 p1 h8 ">
      <div class="svg-bw tmp p2 mr-auto spin"></div>
      <button @click="toggleTheme()" class="p-1" :aria-pressed="isLight">
        <div class="svg-color p1 transition duration-300 ease-in" :class="currIconTheme"></div>
      </button>
      <button @click="toggleSidebar('scale-in-center', 'scale-out-center')"
        class="sm:hidden p-1 transition duration-300 ease-in" :class="currentIcon" :aria-pressed="isNavVisible">
        <div class="svg-color p1 transition duration-300 ease-in"></div>
      </button>
      <nav ref="navElement"
        class="<sm:hidden <sm:fixed bottom-0 left-0 right-0 z--1 bg-[var(--white)] p1 <sm:h[calc(100vh-3rem)]">
        <ul class="flex flex-row gap3 lt-sm:flex-col m0">
          <li v-for=" link in links ">
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