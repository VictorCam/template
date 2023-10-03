import { createApp } from "vue";
import "normalize.css";
import "reset-css";
import "./main.css";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./routes/Home.vue";
import Page from "./routes/Page.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
