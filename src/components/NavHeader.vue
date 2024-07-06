<script setup>
import { ref, computed } from "vue";
import { useDark, useToggle, useIntersectionObserver, useScrollLock } from '@vueuse/core'

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

let isDark = ref(useDark())
let isNavVisible = ref(false);
let navElement = ref(null);
let hamburgerElement = ref(null);
let isLocked = useScrollLock(document.body)

let currentIcon = computed(() => isNavVisible.value ? 'close rotate-z-0' : 'burger rotate-z-360');
let currIconTheme = computed(() => isDark.value ? 'moon' : 'sun');

const toggleTheme = async () => {
  const toggleDark = useToggle(useDark())
  toggleDark()
}

useIntersectionObserver(hamburgerElement, ([{ isIntersecting }]) => {
  if (isIntersecting) return
  isNavVisible.value = false
  isLocked.value = false
})

const toggleSidebar = () => {
  isNavVisible.value = !isNavVisible.value
  isLocked.value = !isLocked.value
}
</script>

<template>
  <header class="outline-1 outline-solid relative z99">
    <div class="sm:mx3 flex items-center gap2 p3 h8 ">
      <div class="svg-c tmp p2 mr-auto spin"></div>
      <button @click="toggleTheme()" class="p1" :aria-pressed="isDark">
        <div class="svg-c p1 transition duration-300 ease-in" :class="currIconTheme"></div>
      </button>
      <button ref="hamburgerElement" @click="toggleSidebar()" class="sm:hidden p1 transition duration-300 ease-in"
        :class="currentIcon" :aria-pressed="isNavVisible">
        <div class="svg-c p1 transition duration-300 ease-in"></div>
      </button>
      <nav class="<sm:hidden p1">
        <ul class="flex flex-row gap3 m0">
          <li v-for=" link in links">
            <a :href="link.href">
              <span>{{ link.name }}</span>
            </a>
          </li>
        </ul>
      </nav>
      <Transition name="fade">
        <nav v-if="isNavVisible" ref="navElement" class="sm:hidden fixed bottom-0 top-13% left-0 right-0 z--1 p1]">
          <ul class="flex gap3 flex-col m0">
            <li v-for="link in links">
              <div class="grid justify-items-center">
                <div class="flex gap2">
                  <div class="svg-c tmp link-icons sm:hidden"></div>
                  <a :href="link.href">
                    <span>{{ link.name }}</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </Transition>
    </div>
  </header>
  <Transition name="fade">
    <div v-if="isNavVisible" class="fixed bg-[var(--white)] inset-0 z-1 h100vh w100vw"></div>
  </Transition>
</template>