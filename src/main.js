import { createApp } from "vue";
import "normalize.css";
import "reset-css";
import "./main.css";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

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
  },
  {
    path: "/page",
    name: "page",
    component: Page,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   if (cookie.get("token")) next();
//   if (!cookie.get("token")) {
//     cookie.remove("token");
//     next("/");
//   }
//   next();
// });

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
