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

// JavaScript
function toggleSidebar() {
  var sidebar = document.querySelector("nav");
  sidebar.classList.toggle("active");
}


onMounted(() => {
  utils.loadSavedTheme(themeSvgRef)
})
</script>

<template>
  <header>
    <div class="svg-bw tmp"></div>
    <button ref="themeBtnRef" @click="
      utils.switchButtonIcons(
        { buttonRef: themeBtnRef, svgRef: themeSvgRef },
        { icon1: 'sun', icon2: 'moon' }
      );
    utils.toggleTheme();
    " aria-pressed="false" class="svg-button margin-left-auto" aria-label="Toggle Dark/Light Theme">
      <div ref="themeSvgRef" class="svg-bw"></div>
    </button>
    <button ref="navBtnRef" @click="
      utils.switchButtonIcons(
        { buttonRef: navBtnRef, svgRef: navSvgRef },
        { icon1: 'burger', icon2: 'close' }
      );
    toggleSidebar();
    " aria-pressed="false" class="svg-button hide-on-desktop" aria-label="Hamburger Menu">
      <div ref="navSvgRef" class="svg-bw burger"></div>
    </button>
    <nav>
      <ul>
        <li v-for="link in links">
          <div class="link-container">
            <div class="group-link-icon">
              <div class="svg-bw tmp link-icons hide-on-desktop"></div>
              <a :href="link.href">
                <span>{{ link.name }}</span>
              </a>
            </div>
          </div>
          <!-- <div class="line hide-on-desktop"></div> -->
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

@media (max-width: 30em) {
  ul {
    flex-direction: column;
    margin-top: 10px;
  }

  .link-container {
    display: grid;
    justify-items: center;
  }

  nav {

    background: var(--black);
    border-right: 1px solid var(--white);
    position: fixed;
    top: 0;
    left: -151px;
    width: 150px;
    height: 100vh;
    transform: translateX(0);
    transition: transform 0.3s ease-out;
  }

  nav.active {
    transform: translateX(151px);
  }

  .group-link-icon {
    display: flex;
    align-items: center;
  }

  .link-icons {
    padding: 3px;
  }
}
</style>
