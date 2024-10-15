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

let hamburgerElement = ref(null);
let LangElement = ref(false);
let DropdownElement = ref(false);

let isNavVisible = ref(false);
let isLocked = useScrollLock(document.body)
let isDark = useDark();
let isLangHovered = useElementHover(LangElement, { delayLeave: 500 })
let isDropdownHovered = useElementHover(DropdownElement)

let toggleDark = useToggle(isDark)

let currIconTheme = computed(() => isDark.value ? 'i-ic-outline-dark-mode bg-white' : 'i-ic-outline-wb-sunny bg-dark');

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
</script>

<template>
  <header z1 b-b b-solid dark:b-dark-200 b-light-900>
    <div sm:mx3 flex items-center gap3 p3 h6>
      <div i-logos-vue p1 animate-rubber-band animate-iteration-infinite animate-duration-1s></div>
      <h1 mr-auto text-5 font-bold>{{ $t("temp") }}</h1>
      <div relative>
        <Transition name="fade">
          <div v-if="isLangHovered || isDropdownHovered" ref="DropdownElement" class="<sm:hidden" absolute top-10 rd-3 flex gap2 p4 bg-light-900 dark:bg-dark-300>
            <ul flex gap2 flex-col>
              <li v-for="lang in availableLocales" role="button" @click="setLocale(lang)"
                flex items-center cursor-pointer>{{ languageCode[lang] }} <span
                  i-ic-baseline-keyboard-arrow-right aria-hidden="true"></span></li>
            </ul>
          </div>
        </Transition>
      </div>
      <nav
        class="<sm:(bg-none mb-8 bg-base-100 mx-auto fixed gap5)" w-fit p2 rd-3 bottom-0 left-0 right-0 flex gap2 items-center justify-center z-50>
        <button @click="toggleDark()" btn :aria-pressed="isDark">
          <div p1 :class="currIconTheme"></div>
        </button>
        <button ref="LangElement" btn :aria-expanded="isLangHovered">
          <div i-ic-outline-translate p1></div>
        </button>
        <router-link :to="link.href" v-for="link in links">
          <button btn>
            <div :class="link.class" p1></div>
          </button>
        </router-link>
      </nav>
    </div>
  </header>
</template>