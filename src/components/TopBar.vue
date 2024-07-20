<script setup>
import { ref, computed } from "vue";
import { useDark, useToggle, useIntersectionObserver, useScrollLock, useElementHover, usePreferredLanguages } from '@vueuse/core'
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n({ useScope: "global" });

let languageCode = {
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
  {
    name: "404",
    href: "/404",
  }
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
let currentIcon = computed(() => isNavVisible.value ? 'close' : 'burger');

useIntersectionObserver(hamburgerElement, ([{ isIntersecting }]) => {
  if (isIntersecting) return
  isNavVisible.value = false
  isLocked.value = false
})

// set and get locale
locale.value = localStorage.getItem('locale') || 'en'
const setLocale = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

const toggleSidebar = () => {
  toggleNavVisible()
  toggleLock()
}
</script>

<template>
  <header class="shadow shadow-md dark:shadow-black/50 relative z1">
    <div class="sm:mx3 flex items-center gap2 p3 h6">
      <div class="svg-c tmp p2 spin"></div>
      <h1 class="mr-auto text-5">{{ $t("temp") }}</h1>
      <div class="relative">
        <button ref="LangElement" :aria-expanded="isLangHovered" class="svg-c i-btn <sm:hidden translate p3"></button>
        <Transition name="fade">
          <div v-if="isLangHovered || isDropdownHovered" ref="DropdownElement"
            class="<sm:hidden absolute top-10 rd-3 flex gap2 p4 bg-light-900 dark:bg-dark-300">
            <ul class="flex gap2 flex-col">
              <li v-for="lang in availableLocales" role="button" @click="setLocale(lang)"
                class="flex items-center cursor-pointer">{{ languageCode[lang] }} <span class="svg-c right-arrow"
                  aria-hidden="true"></span></li>
            </ul>
          </div>
        </Transition>
      </div>
      <button @click="toggleDark()" class="svg-c i-btn p3" :class="currIconTheme" :aria-pressed="isDark"></button>
      <button ref="hamburgerElement" @click="toggleSidebar()" class="sm:hidden svg-c i-btn p3" :class="currentIcon"
        :aria-pressed="isNavVisible">
      </button>
      <nav class="<sm:hidden p1">
        <ul class="flex flex-row gap3 m0">
          <li v-for=" link in links">
            <router-link @click="toggleSidebar()" :to="link.href">
              <span>{{ link.name }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      <nav v-if="isNavVisible" ref="navElement" class="sm:hidden bg-base fixed z99 bottom-0 top-12 left-0 right-0 pt5">
        <ul class="flex gap3 flex-col">
          <li v-for="link in links">
            <div class="grid justify-items-center m1">
              <div class="flex gap2">
                <div class="svg-c tmp link-icons sm:hidden"></div>
                <router-link @click="toggleSidebar()" :to="link.href">
                  <span>{{ link.name }}</span>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
        <div class="dark:bg-dark-300 bg-light-900 mx-auto w-fit flex flex-col gap5 mt-5 p5 rd-3">
          <p class="flex gap2 c-dark-500 dark:c-dark-900">Translations
          <div class="svg-c translate"></div>
          </p>
          <div class="cursor-pointer" v-for="lang in availableLocales" role="button"
            @click="setLocale(lang); toggleSidebar()">
            <span class="flex items-center">
              {{ languageCode[lang] }} <div class="svg-c right-arrow" aria-hidden="true">
              </div>
            </span>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>