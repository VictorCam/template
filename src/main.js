import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createI18n } from 'vue-i18n'
import { usePreferredLanguages } from '@vueuse/core'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'; // Generated routes
import { registerSW } from 'virtual:pwa-register'
import { useAuthStore } from "./store";
let { execVerifyToken } = useAuthStore();

// shortcut dev tool for vConsole
if (import.meta.env.MODE === 'development') {
  import('vconsole').then((VConsole) => {
    const vConsole = new VConsole.default();
    const vConsoleVisible = localStorage.getItem('vConsoleVisible');

    // Show vConsole if it was visible before the refresh
    if (vConsoleVisible === 'true') {
      vConsole.show();
    } else {
      vConsole.hide(); // Hide it initially
    }

    // Function to update the visibility state in localStorage
    function updateVConsoleState() {
      const vcMask = document.querySelector('.vc-mask');
      if (vcMask && vcMask.style.display === 'none') {
        localStorage.setItem('vConsoleVisible', 'false');
      } else {
        localStorage.setItem('vConsoleVisible', 'true');
      }
    }

    // MutationObserver to listen for changes in .vc-mask
    const observer = new MutationObserver(() => {
      updateVConsoleState();
    });

    // Start observing the .vc-mask for attribute changes
    const vcMask = document.querySelector('.vc-mask');
    if (vcMask) {
      observer.observe(vcMask, {
        attributes: true,
        attributeFilter: ['style'], // Only watch for changes to the style attribute
      });
    }

    // Add event listener for Ctrl + C to toggle vConsole
    document.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.key.toLowerCase() === 'c') {
        const vcMask = document.querySelector('.vc-mask');

        if (vcMask && vcMask.style.display === 'none') {
          vConsole.show(); // Show vConsole if it's hidden
        } else {
          vConsole.hide(); // Hide vConsole if it's visible
        }
        updateVConsoleState(); // Update state after toggle
      }
    });
  });
}

import 'virtual:uno.css';
import "normalize.css";
import "reset-css";
import "./styles/animations.css";
import "./styles/main.css";
import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  if (typeof to.meta.requiresAuth === 'undefined') return next()
  if (to.meta.requiresAuth === true && execVerifyToken() === true) return next();
  return next(to.meta.redirect);
});

import EN from '../locales/en.json'
import ES from '../locales/es.json'

const i18n = createI18n({
  locale: usePreferredLanguages().value[0],
  fallbackLocale: 'en',
  legacy: false,
  messages: {
    en: EN,
    es: ES,
  },
})

const updateSW = registerSW({
  onNeedRefresh() { },
  onOfflineReady() { }
})

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");

export { routes };