<script setup>
import { ref, computed } from "vue";
import { useDark, useToggle, useTimeoutFn } from '@vueuse/core'
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import {useAuthStore} from '../store';

let {execLogout} = useAuthStore();

const router = useRouter();

const { locale, availableLocales } = useI18n({ useScope: "global" });

let languageCode = {
  'en': 'English',
  'es': 'Espanol',
}

let links = [
  {
    name: "Home",
    href: "/",
    class: 'i-ic-outline-home'
  },
  {
    name: "Page",
    href: "/page",
    class: 'i-ic-outline-newspaper'
  },
  {
    name: "Signup",
    href: "/signup",
    class: 'i-ic-outline-person-add'
  },
  {
    name: "Login",
    href: "/login",
    class: 'i-ic-outline-person'
  }
];

let isDark = useDark();
let toggleDark = useToggle(isDark)
let currIconTheme = computed(() => isDark.value ? 'i-ic-outline-dark-mode bg-white' : 'i-ic-outline-wb-sunny bg-dark');

let [isLoggingOut, toggleLogout] = useToggle(false);

// set and get locale
locale.value = localStorage.getItem('locale') || 'en'
const setLocale = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

// logout 
const logout = async () => {
  toggleLogout();
  useTimeoutFn(() => {
    execLogout();
    toggleLogout();
    router.push('/login')
  }, 750)
}
</script>

<template>
  <header class="z1 b-b b-solid dark:b-dark-200 b-light-900">
    <div v-if="isLoggingOut" class="bg-base-100 op50 fixed z-1 inset-0"><div class="i-svg-spinners-bars-rotate-fade p3 center"></div></div>
    <div class="sm:mx3 flex items-center gap3 p3 h6">
      <div class="i-logos-vue p1 animate-rubber-band animate-iteration-infinite animate-duration-1s"></div>
      <h1 class="mr-auto text-5 font-bold">{{ $t("temp") }}</h1>
      <nav class="<sm:(bg-none mb-8 bg-base-100 mx-auto fixed gap5) w-fit p2 rd-3 bottom-0 left-0 right-0 flex gap2 items-center justify-center z-50">
        <button class="btn" :aria-pressed="isDark" @click="toggleDark()">
          <div class="p1" :class="currIconTheme"></div>
        </button>
        <div class="relative inline-block group">
          <button class="btn">
            <div class="i-ic-outline-translate p1"></div>
          </button>
          <div class="absolute left-0 <sm:bottom-full w-48 border rounded shadow-md opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 ease-out">
            <a href="#" class="wfull no-underline cursor-pointer block px-4 py-2 bg-base-100 b-none flex gap2">English <div class="i-ic-baseline-keyboard-arrow-right"></div></a>
            <a href="#" class="wfull no-underline cursor-pointer block px-4 py-2 bg-base-100 b-none flex gap2">Spanish <div class="i-ic-baseline-keyboard-arrow-right"></div></a>
          </div>
        </div>
        <router-link v-for="link in links" :key="link.name" :to="link.href">
          <button class="btn">
            <div class="p1" :class="link.class"></div>
          </button>
        </router-link>
        <button class="btn" @click="logout"><div class="p1 bg-red i-clarity-sign-out-line"></div></button>
      </nav>
    </div>
  </header>
</template>
