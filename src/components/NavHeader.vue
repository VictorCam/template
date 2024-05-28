<script setup>
import { ref, onMounted } from "vue";
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

function toggleSidebar() {
  var sidebar = document.querySelector("nav");
  sidebar.classList.toggle("active");
}

onMounted(() => {
  utils.loadSavedTheme(themeSvgRef)
})
</script>

<template>
  <header class="flex items-center gap2 p2 outline-1 outline-solid outline-[var(--white)]">
    <div class="svg-bw tmp p3.5"></div>
    <button ref="themeBtnRef" @click="
      utils.switchButtonIcons(
        { buttonRef: themeBtnRef, svgRef: themeSvgRef },
        { icon1: 'sun', icon2: 'moon' }
      );
    utils.toggleTheme();
    " aria-pressed="false" class="svg-button ml-auto" aria-label="Toggle Dark/Light Theme">
      <div ref="themeSvgRef" class="svg-bw sun p3"></div>
    </button>
    <button ref="navBtnRef" @click="
      utils.switchButtonIcons(
        { buttonRef: navBtnRef, svgRef: navSvgRef },
        { icon1: 'burger', icon2: 'close' }
      );
    toggleSidebar();
    " aria-pressed="false" class="svg-button sm:hidden" aria-label="Hamburger Menu">
      <div ref="navSvgRef" class="svg-bw burger p3"></div>
    </button>
    <nav class="lt-sm:bg-[var(--black)] mr-2 z-99">
      <ul class="flex flex-row gap3 lt-sm:flex-col lt-sm:mb2 m0">
        <li v-for="link in links">
          <div class="grid justify-items-center">
            <div class="group-link-icon">
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

nav {
  --at-apply: lt-sm:fixed;
}

@media (max-width: 640px) {
  nav {
    position: fixed;
    top: 50px;
    left: calc(-100%);
    width: 100%;
    height: 100vh;
    transition: transform 0.3s ease-out;
  }

  nav.active {
    transform: translateX(100%);
  }

  .group-link-icon {
    display: flex;
    align-items: center;
  }
}
</style>
