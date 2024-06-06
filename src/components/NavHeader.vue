<script setup>
import { ref, onMounted } from "vue";
import utils from "../utils";
const navBtnRef = ref(null);
const navSvgRef = ref(null);
const currIconTheme = ref(null);

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

async function toggleHidden(ref) {
  ref.classList.toggle("hidden");
}

async function toggleSidebar() {
  var sidebar = document.querySelector("nav");
  sidebar.classList.toggle("scale-in-center");
  sidebar.classList.toggle("scale-out-center");
  await utils.waitForAnimation(sidebar);
  // check if sidebar has scale-out-center class
}

onMounted(() => {
  utils.loadSavedTheme()
})
</script>

<template>
  <header class="flex items-center gap2 p1 outline-1 outline-solid outline-[var(--white)]">
    <div class="svg-bw tmp p2 mr-auto"></div>
    <input ref="currIconTheme" class="cb-btn hidden" type="checkbox" id="theme" />
    <label for="theme" @click="utils.toggleTheme()" type="button" aria-label="navigation button"
      class="transition duration-200 ease-in flex flex-row items-center gap2 w-fit p1 rd-2 cursor-pointer">
      <div class="svg-color p1 sun bg-yellow"></div>
      <div class="svg-color p1 moon bg-blue"></div>
    </label>
    <button ref="navBtnRef" @click="
      utils.switchButtonIcons({ buttonRef: navBtnRef, svgRef: navSvgRef }, { icon1: 'burger', icon2: 'close' });
    toggleSidebar();
    " aria-pressed="false" class="svg-button sm:hidden" aria-label="Hamburger Menu">
      <div ref="navSvgRef" class="svg-bw burger p1"></div>
    </button>
    <nav
      class="<sm:bg-[var(--black)] mr-2 z-99 <sm:fixed <sm:mt-12.5 <sm:top-0 <sm:left-0 <sm:w-full <sm:h-full <sm:bg-[var(--black)]">
      <ul class="flex flex-row gap3 lt-sm:flex-col <sm:mb2 m0">
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
  </header>


</template>

<style>
button {
  --at-apply: b-none bg-transparent;
}
</style>
