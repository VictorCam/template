<script setup>
import { useCounterStore, useUserStore } from "../store";
import utils from '../utils';
import placeHolder from '../assets/placeholder.svg'
import {useDateFormat} from '@vueuse/core'
import { onMounted } from "vue";

let { increment, doubleCount, count } = useCounterStore()
let { users, isLoadingUsers, errorUsers, execFetchUsers } = useUserStore()

onMounted(() => {
  if(users = []) execFetchUsers()
})
</script>

<template>
  <div absolute>
    <div flex flex-wrap items-center gap2.5 p2>
      <button btn @click="increment">Increment</button>
    </div>
    <div p2>
      <p>count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
    </div>

    <!-- User Template -->
    <div v-if="isLoadingUsers" p3 flex flex-wrap gap3 mt3>
      <div v-for="i in 12" animate-pulse bg-base-100 aspect-square w30 p2 rd-3></div>
    </div>
    <!-- User Profiles -->
    <div p2 flex flex-wrap gap3 justify-start mt3 >
      <div rd-2 p2 flex flex-col justify-center bg-base-100 v-for="users in users.items" :id="users.id">
          <img @error="utils.handleImgError($event, placeHolder)" rd-2 aspect-square w30 :src="utils.getImg(users.collectionId, users.id, users.avatar)" alt="test" />
          <p font-bold pb2>{{ users.username }}</p>
          <p>Joined: {{ useDateFormat(users.created, 'MMM DD YYYY') }}</p>
      </div>
    </div>
    
  </div>
</template>