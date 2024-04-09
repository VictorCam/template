import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useToastStore = defineStore("toast", () => {
  const toasts = ref([
    {
      id: 1,
      message: "test1",
      type: "success",
    },
    {
      id: 2,
      message: "test2",
      type: "error",
    },
  ]);
  return { toasts };
})

export const authStore = defineStore("auth", () => {
  const loggedIn = ref(false);
  const token = ref(null);

  function login() {
    loggedIn.value = true;
    token.value = Math.random().toString(36).slice(2);
  }

  function logout() {
    loggedIn.value = false;
    token.value = null;
  }
  return { loggedIn, token, login, logout };
})

// export const useThemeStore = defineStore("theme", () => {
//   const theme = ref("light");
//   const toggleTheme = () => {
//     theme.value = theme.value === "light" ? "dark" : "light";
//   };
//   return { theme, toggleTheme };
// })