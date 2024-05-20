import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
// import 'virtual:uno.css';
// import { registerSW } from 'virtual:pwa-register'

// const updateSW = registerSW({
//   onOfflineReady() {
//     alert('ready to work offline')
//   },
// })

import "normalize.css";
import "reset-css";
import "./css/utils.css";
import "./css/icons.css";
import "./css/animations.css";
import "./css/main.css";
import "./css/media.css";
import './css/position.css';

import App from "./App.vue";
import Home from "./routes/Home.vue";
import Page from "./routes/Page.vue";
import NotFound from "./routes/404.vue";

import cookie from "js-cookie";

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

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   if (cookie.get("token")) return next();
//   if (!cookie.get("token")) {
//     cookie.remove("token");
//     return next("/");
//   }
//   return next();
// });

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");

export { routes };