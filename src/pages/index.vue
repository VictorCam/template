<script setup>
import { useCounterStore, useUserStore } from "../store";
import utils from '../utils';
import placeHolder from '../assets/placeholder.svg'

import {useDateFormat} from '@vueuse/core'

let { increment, doubleCount, count } = useCounterStore()
let { users, isLoadingUsers, errorUsers } = useUserStore()
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
      <div v-for="i in 10" class="animate-pulse bg-base-100 aspect-square w30 p2 rd-3"></div>
    </div>
    <!-- User Profiles -->
    <div class="p2 flex flex-wrap gap3 justify-start mt3" >
      <div class="rd-2 p2 flex flex-col justify-center bg-base-100" v-for="users in users.items" :id="users.id">
          <img @error="utils.handleImgError($event, placeHolder)" class="rd-2 aspect-square w30 rd-2" :src="utils.getImg(users.collectionId, users.id, users.avatar)" alt="test" />
          <p class="font-bold pb2">{{ users.username }}</p>
          <p>Joined: {{ useDateFormat(users.createdAt, 'MMM DD YYYY') }}</p>
      </div>
    </div>
    
  </div>
</template>