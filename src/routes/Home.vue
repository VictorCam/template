<script setup>
import { useCounterStore, useToastStore } from "../store";
import { ref } from "vue";
import utils from '../utils';
import { useScrollLock } from '@vueuse/core'
const store = useCounterStore();
const toastStore = useToastStore();
let toasts = toastStore.toasts;

let isLocked = useScrollLock(document.body)

let modal = ref(null)

const showHide = (value) => {
  modal.value != value ? modal.value = value : modal.value = null;
  isLocked.value = !isLocked.value
};
</script>

<template>
  <div>
    <NavHeader />
    <p>count: {{ store.count }}</p>
    <p>Double Count: {{ store.doubleCount }}</p>
    <div class="flex flex-wrap gap2.5 p2">
      <button class="main-button" @click="store.increment">{{ $t('Increment') }}</button>
      <button @click="utils.addItem(toasts, { message: 'test4', type: 'success' })" class="main-button">{{
      $t('CreateToast') }}</button>
      <button class="main-button" @click="showHide('modal')">Show modal</button>
      <router-link to="/Page">{{ $t('Page') }}</router-link>
      <router-link to="aewoifj">{{ $t('BadLink') }}</router-link>
    </div>

    <p>Lorem ipsum npmdolor sit amet consectetur adipisicing elit. Deserunt eos rem harum vero, totam, iste unde dolores
      asperiores blanditiis veniam in perspiciatis optio doloribus aperiam dolore nulla, vel soluta maxime.
      Officia rem ut sunt totam dolore perspiciatis commodi esse, quae provident perferendis ducimus placeat
      consequuntur nemo natus nobis repudiandae eum quas vel necessitatibus hic in et obcaecati minus velit. Expedita?
      Perferendis ex at sint laboriosam? Aliquid, nesciunt eveniet, eum repudiandae ab consectetur veniam hic commodi
      quibusdam placeat, vitae quaerat repellat quos nobis numquam molestiae praesentium eos ipsum et error? Delectus!
      Ex quia consectetur tempora aperiam impedit, eum sequi earum veniam tempore voluptates libero autem ad amet minus
      officia delectus modi explicabo saepe possimus? Nam perspiciatis deleniti corrupti eum ipsa eligendi.
      Quisquam, quod suscipit ut cumque voluptas aliquam voluptatum minus atque rerum expedita dignissimos! Perspiciatis
      quos illo, fugit dignissimos sint enim expedita amet nobis ducimus facere nulla. Laudantium cumque molestiae
      dolorum!
      Ad odio cupiditate eaque ab consectetur explicabo? Rem, explicabo facilis animi quo adipisci quam amet vitae sint
      officia ab qui eius quas harum. Iste consequuntur libero, ipsa nam rem accusamus!
      Consectetur dolorum minima tenetur? Corrupti cum saepe nisi porro, maiores vel. Eos totam, recusandae incidunt nam
      itaque sed vel ad nobis quia enim impedit in libero sequi, voluptate accusantium! Repellat?
      Quia dolores debitis excepturi quidem doloribus voluptatibus voluptates ipsa corrupti recusandae fugit, odit
      mollitia aliquid temporibus suscipit non ratione corporis! Dicta provident dolorum error repellat magni porro amet
      obcaecati laboriosam.
      Voluptatibus numquam iusto non assumenda mollitia, unde minus, sunt deserunt possimus ipsa nulla vero dolor beatae
      odio a illum amet ipsam officiis. Recusandae, molestiae quisquam quaerat illo explicabo ad totam.
      Architecto rerum recusandae cumque debitis fugit esse nesciunt incidunt iure quam aliquid doloribus omnis officia
      impedit cum necessitatibus odit eum, quibusdam sint exercitationem sapiente nobis suscipit perferendis quidem
      inventore. Dolorum?</p>
    <!-- Toasts -->
    <div class="flex flex-col fixed m2.5 left-0 bottom-0">
      <TransitionGroup name="list" tag="Toast">
        <Toast v-for="toast in toasts" :key="toast.id" :id="toast.id" :message="toast.message" :type="toast.type" />
      </TransitionGroup>
    </div>

    <!-- Modal -->
    <Transition name="fade">
      <div v-if="modal === 'modal'" class="center fixed overflow-hidden wfit z-99" @click="showHide">
        <div class="bg-[var(--white)] b b-solid mxauto rd-3" @click="$event.stopPropagation()">
          <button class="absolute right-0 top-0 pr2" @click="showHide()">
            <div class="close svg-bw py1"></div>
          </button>
          <div class="text-center p7">
            <p>Lorem</p>
          </div>
        </div>
      </div>
    </Transition>
    <Transition name="fade">
      <div v-if="modal === 'modal'" class="fixed bg-black/80 z-1 inset-0 w100vw h100vh"></div>
    </Transition>
  </div>
</template>