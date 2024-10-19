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
  let fetchSignUp = async () => await pb.collection('users').authWithPassword(jsonForm.username, jsonForm.password);
  let checkLoggedIn = async () => await pb.authStore.isValid();
  let logout = async () => pb.authStore.clear();

  let { state: userLogin, isLoading: isLoadingLogin, error: errorLogin, execute: execLogin } = useAsyncState(fetchSignUp, [], { immediate: false });
  let { state: isLoggedIn, execute: execCheckLoggedIn } = useAsyncState(checkLoggedIn, []);
  let { execute: execLogout } = useAsyncState(logout, [], { immediate: false });

  return { userLogin, isLoadingLogin, errorLogin, execLogin, isLoggedIn, execCheckLoggedIn, execLogout };
})