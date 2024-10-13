<script setup>
import PocketBase from 'pocketbase';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAsyncState } from '@vueuse/core'
const router = useRouter();

const pb = new PocketBase(import.meta.env.VITE_API_URL);

let formData = reactive({
    username: '',
    name: '',
    password: '',
    passwordConfirm: '',
    emailVisible: false,
    email: ''
})

const fetchSignUp = async () => await pb.collection('users').create(formData)
const { error, execute, isLoading } = useAsyncState(fetchSignUp, undefined, { immediate: false });

const handleSubmit = async () => {
    if(formData.username === '' || formData.name === '' || formData.password === '' || formData.passwordConfirm === '' || formData.email === '') {
            alert('Please fill out all fields')
            return
    }
    await execute()
    if(!error.value) router.push('/login') 
}
</script>

<template>
<div>
    <div class="center">
        <h2 class="mb3 font-bold text-5">Sign Up</h2>
        <div class="p5 bg-base-100 rd-2">
            <form class="flex flex-col" @submit.prevent="handleSubmit">
                <label class="mb0.5" for="username">Username:</label>
                <input v-model="formData.username" class="mb2" type="text" id="username" name="username">
                <label class="mb0.5" for="name">Name:</label>
                <input v-model="formData.name" class="mb2" type="text" id="name" name="name">
                <label class="mb0.5" for="password">Password:</label>
                <input v-model="formData.password" class="mb2" type="password" id="password" name="password">
                <label class="mb0.5" for="passwordConfirm">Confirm Password:</label>
                <input v-model="formData.passwordConfirm" class="mb2" type="password" name="passwordConfirm">
                <label class="mb0.5" for="email">Email:</label>
                <input v-model="formData.email" class="mb5" type="email" name="email" >
                <button class="btn flex gap2 items-center wfull justify-center" type="submit">Submit
                    <div v-if="isLoading" class="i-svg-spinners-bars-rotate-fade"></div>
                </button>
            </form>
        </div>
    </div>
</div>
</template>