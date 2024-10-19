<script setup>
import { useCounterStore, useUserStore, useAuthStore } from "../store";
import utils from '../utils';
import placeHolder from '../assets/placeholder.svg'
import {useDateFormat} from '@vueuse/core'
import { onMounted } from "vue";

let { increment, doubleCount, count } = useCounterStore()
let { users, isLoadingUsers, errorUsers, execFetchUsers } = useUserStore()
// let { isValid, execIsValid } = useAuthStore()

// Get Users if they haven't been loaded in
onMounted(() => {
if(users.value.length === 0) execFetchUsers()
})
</script>

<template>
  <div class="absolute">
    <div class="flex flex-wrap items-center gap2.5 p2">
      <button class="btn" @click="increment">Increment</button>
    </div>
    <div class="p2">
      <p>count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
    </div>

    <!-- User Template -->
    <div v-if="isLoadingUsers" class="p3 flex flex-wrap gap3 mt3">
      <div v-for="i in 12" :key="i" class="animate-pulse bg-base-100 aspect-square w30 rd-3 p2"></div>
    </div>
    <!-- User Profiles -->
    <div class="flex flex-wrap gap3 justify-start mt3 p2">
      <div v-for="users in users.items" :key="users.id" class="rd-2 p2 flex flex-col justify-center bg-base-100">
          <img class="aspect-square w30 rd-2" :src="utils.getImg(users.collectionId, users.id, users.avatar)" alt="profile" @error="utils.handleImgError($event, placeHolder)" />
          <p class="font-bold pb2">{{ users.username }}</p>
          <p>Joined: {{ useDateFormat(users.created, 'MMM DD YYYY') }}</p>
      </div>
    </div>
    
  </div>
</template>