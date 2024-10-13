import { computed, ref } from "vue";
import { createGlobalState, useAsyncState } from '@vueuse/core'
import pocketBase from 'pocketbase';
const pb = new pocketBase(import.meta.env.VITE_API_URL);

export const useCounterStore = createGlobalState(() => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  return { count, doubleCount, increment };
});

export const useUserStore = createGlobalState(() => {
  const fetchUsers = async () => await pb.collection('users').getList(1, 50);
  const { state: users, isLoading: isLoadingUsers, error: errorUsers } = useAsyncState(fetchUsers, []);

  return { users, isLoadingUsers, errorUsers, fetchUsers };
});