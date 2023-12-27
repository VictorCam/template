<script setup>
import { ref } from "vue";
import utils from "../utils";
import { onMounted } from 'vue'
const navBtnRef = ref(null);
const navSvgRef = ref(null);
const themeBtnRef = ref(null);
const themeSvgRef = ref(null);

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

onMounted(() => {
  utils.determineTheme(themeSvgRef)
})

const toggleTheme = () => {
  // get the system theme and the current theme set manually
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = document.documentElement.getAttribute('style')?.includes('color-scheme: light;') ? 'light' : 'dark';

  // determine the theme to apply
  const theme = prefersDark || currentTheme !== 'dark' ? 'dark' : 'light';

  // save the theme and apply it
  localStorage.setItem('theme', theme);
  document.documentElement.style.setProperty("color-scheme", theme);
};

</script>

<template>
  <header>
    <div class="svg-bw tmp"></div>
    <button ref="navBtnRef" @click="
      utils.switchButtonIcons(
        { buttonRef: navBtnRef, svgRef: navSvgRef },
        { icon1: 'burger', icon2: 'close' }
      )
      " aria-pressed="false" class="svg-button margin-left-auto" aria-label="Hamburger Menu">
      <div ref="navSvgRef" class="svg-bw burger"></div>
    </button>
    <button ref="themeBtnRef" @click="
                                                                                                                                                                                                                                        {
      utils.switchButtonIcons(
        { buttonRef: themeBtnRef, svgRef: themeSvgRef },
        { icon1: 'sun', icon2: 'moon' }
      );
    }
    toggleTheme();
    " aria-pressed="false" class="svg-button" aria-label="Toggle Dark/Light Theme">
      <div ref="themeSvgRef" class="svg-bw"></div>
    </button>
    <nav>
      <ul>
        <li v-for="link in links">
          <a :href="link.href">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
}

button {
  background: none;
  border: none;
}

ul {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

nav {
  margin-right: 10px;
}
</style>
