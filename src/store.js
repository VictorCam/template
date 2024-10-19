import { computed, ref } from "vue";
import { createGlobalState, useAsyncState } from '@vueuse/core'
import pocketBase from 'pocketbase';
let pb = new pocketBase("https://ferret.pockethost.io");

export let useCounterStore = createGlobalState(() => {
  let count = ref(0);
  let doubleCount = computed(() => count.value * 2);
  let increment = () => count.value++;
  return { count, doubleCount, increment };
});

export let useUserStore = createGlobalState(() => {
  let fetchUsers = async () => await pb.collection('users').getList(1, 50);
  let { state: users, isLoading: isLoadingUsers, error: errorUsers, execute: execFetchUsers } = useAsyncState(fetchUsers, [], { immediate: false });
  return { users, isLoadingUsers, errorUsers, execFetchUsers };
});

export let useAuthStore = createGlobalState((jsonForm) => {
  let execIsLoggedIn = () => pb.authStore.isValid();
  let execLogout = () => pb.authStore.clear();

  let { state: stateLogin, isLoading: isLoadingLogin, error: errorLogin, execute: execLogin } = useAsyncState(async () => {
    await pb.collection('users').authWithPassword(jsonForm.username, jsonForm.password)
  }, [], { immediate: false });

  return { stateLogin, isLoadingLogin, errorLogin, execLogin, isLoggedIn, execIsLoggedIn, execLogout };
})