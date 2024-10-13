<script setup>
import PocketBase from 'pocketbase';
import { reactive } from 'vue'

// import the vue router to direct the user if the user and password is correct
import { useRouter } from 'vue-router';
const router = useRouter();
const pb = new PocketBase(import.meta.env.VITE_API_URL);

let formData = reactive({
    username: '',
    password: ''
})

const handleSubmit = async () => {
    try {
        if(formData.username === '' || formData.password === '') return
        const authData = await pb.collection('users').authWithPassword(formData.username, formData.password);
        if (authData.token) return router.push('/')
    }
    catch (e) {
        alert(e)
    }
}
</script>

<template>
    <div class="center">
        <h2 class="mb3 font-bold text-5">Login</h2>
        <div class="p5 bg-base-100 rd-2">
            <form class="flex flex-col" @submit.prevent="handleSubmit">
                <label class="mb0.5" for="username">Username:</label>
                <input v-model="formData.username" class="mb2" type="text" id="username" name="username">
                <label class="mb0.5" for="password">Password:</label>
                <input v-model="formData.password" class="mb5" type="password" id="password" name="password">
                <button class="btn" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>