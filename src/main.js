import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createI18n } from 'vue-i18n'
import { usePreferredLanguages } from '@vueuse/core'
import 'virtual:uno.css';

import "normalize.css";
import "reset-css";
import "./styles/utils.css";
import "./styles/icons.css";
import "./styles/animations.css";
import "./styles/main.css";

import App from "./App.vue";
import Home from "./routes/Home.vue";
import Page from "./routes/Page.vue";
import NotFound from "./routes/404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { transition: 'fade' }
  },
  {
    path: "/page",
    name: "page",
    component: Page,
    meta: { transition: 'fade' }
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: { transition: 'fade' }
  },
];

// import cookie from "js-cookie";
// router.beforeEach((to, from, next) => {
//   if (cookie.get("token")) return next();
//   if (!cookie.get("token")) {
//     cookie.remove("token");
//     return next("/");
//   }
//   return next();
// });

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
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

import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh() { },
  onOfflineReady() { }
})

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");

export { routes };