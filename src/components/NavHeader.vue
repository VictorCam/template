<script setup>
import { ref } from "vue";
import utils from "../utils";
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

const toggleTheme = () => {
  console.log(document.documentElement);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  let currTheme = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("prefers-color-scheme")
    .trim();
  console.log(currTheme);
  // console.log(
  // );

  let res = window.matchMedia("(color-scheme: light)").matches;
  console.log(res);
  //when starting the website check if they prefer light or dark
  let theme = !prefersDark || prefersLight ? "dark" : "light";

  // overwrite the theme if a color-scheme is set on it
  theme =
    // get the users current color-scheme from the root element
    document.documentElement.style.setProperty("color-scheme", theme);

  let test = window.matchMedia("(color-scheme: light)").matches;

  console.log(test);
};
</script>

<template>
  <header>
    <div class="svg-bw tmp"></div>
    <button
      ref="navBtnRef"
      @click="
        utils.switchButtonIcons(
          { buttonRef: navBtnRef, svgRef: navSvgRef },
          { icon1: 'burger', icon2: 'close' }
        )
      "
      aria-pressed="false"
      class="svg-button margin-left-auto"
      aria-label="Hamburger Menu"
    >
      <div ref="navSvgRef" class="svg-bw burger"></div>
    </button>
    <button
      ref="themeBtnRef"
      @click="
        {
          utils.switchButtonIcons(
            { buttonRef: themeBtnRef, svgRef: themeSvgRef },
            { icon1: 'sun', icon2: 'moon' }
          );
        }
        toggleTheme();
      "
      aria-pressed="false"
      class="svg-button"
      aria-label="Toggle Dark/Light Theme"
    >
      <div ref="themeSvgRef" class="svg-bw sun"></div>
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
