<script setup>
import { ref, computed, onMounted } from "vue";
import { useDark, useToggle, useIntersectionObserver, useScrollLock, useElementHover, usePreferredLanguages } from '@vueuse/core'
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n({ useScope: "global" });
console.log(locale.value)
console.log(availableLocales)
console.log(usePreferredLanguages().value[0].split('-')[0])

const languageCode = {
  'en': 'English',
  'es': 'Español',
}

let links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Page",
    href: "/page",
  },
];

let hamburgerElement = ref(null);
let navElement = ref(null);
let LangElement = ref(false);
let DropdownElement = ref(false);

let isNavVisible = ref(false);
let isLocked = useScrollLock(document.body)
let isDark = useDark();
let isLangHovered = useElementHover(LangElement, { delayLeave: 500 })
let isDropdownHovered = useElementHover(DropdownElement)

let toggleDark = useToggle(isDark)
let toggleLock = useToggle(isLocked)
let toggleNavVisible = useToggle(isNavVisible)

let currIconTheme = computed(() => isDark.value ? 'moon' : 'sun');
let currentIcon = computed(() => isNavVisible.value ? 'close rotate-z-0' : 'burger rotate-z-360');

useIntersectionObserver(hamburgerElement, ([{ isIntersecting }]) => {
  if (isIntersecting) return
  isNavVisible.value = false
  isLocked.value = false
})

// console.log(locale)

const toggleSidebar = () => {
  toggleNavVisible()
  toggleLock()
}
</script>

<template>
  <header class="shadow shadow-md .dark:shadow-black/50 relative z1">
    <div class="sm:mx3 flex items-center gap2 p3 h8 ">
      <div class="svg-c tmp p2 spin"></div>
      <h1 class="mr-auto text-6">{{ $t("temp") }}</h1>
      <div class="relative">
        <button ref="LangElement" :aria-expanded="isLangHovered" class="svg-c <sm:hidden translate p3"></button>
        <Transition name="fade">-
          <div v-if="isLangHovered || isDropdownHovered" ref="DropdownElement"
            class="b b-solid <sm:hidden absolute top-10 rd-3 flex gap2 p4 bg-light .dark:bg-dark">
            <ul class="flex gap2 flex-col">
              <li v-for="lang in availableLocales" role="button" @click="locale = lang"
                class="flex cursor-pointer gap1">{{ languageCode[lang] }} <span class="italic"
                  aria-hidden="true">▶</span></li>
            </ul>
          </div>
        </Transition>
      </div>
      <button @click="toggleDark()" class="p1" :aria-pressed="isDark">
        <div class="svg-c p1" :class="currIconTheme"></div>
      </button>
      <button ref="hamburgerElement" @click="toggleSidebar()" class="sm:hidden p1 transition duration-300 ease-in"
        :class="currentIcon" :aria-pressed="isNavVisible">
        <div class="svg-c p1 transition duration-300 ease-in"></div>
      </button>
      <nav class="<sm:hidden p1">
        <ul class="flex flex-row gap3 m0">
          <li v-for=" link in links">
            <router-link :to="link.href">
              <span>{{ link.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <Transition name="fade">

      </Transition>
    </div>
  </header>
</template>