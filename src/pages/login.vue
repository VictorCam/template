<script setup>
import PocketBase from 'pocketbase';
import { reactive } from 'vue'
import { useAsyncState } from '@vueuse/core'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import { useRouter } from 'vue-router';

const router = useRouter();
const pb = new PocketBase(import.meta.env.VITE_API_URL);

let formData = reactive({
    username: '',
    password: ''
})

const fetchSignUp = async () => await pb.collection('users').authWithPassword(formData.username, formData.password)
const { error, execute, isLoading, state ,isReady } = useAsyncState(fetchSignUp, [], { immediate: false });

const rules = {
    username: { type: 'string', min: 2, max: 50, required: true },
    password: { type: 'string', min: 8, required: true }
}

const { pass, errorFields } = useAsyncValidator(formData, rules)

const handleSubmit = async () => {
    await execute()
    router.push('/')
}
</script>

<template>
    <div class="center">
        <h2 class="mb3 font-bold text-5 w70vw">Login</h2>
        <div class="p5 bg-base-100 rd-2">
            <form class="flex flex-col" @submit.prevent="handleSubmit">
                
                <label class="mb0.5" for="username">Username:</label>
                <input v-model="formData.username" type="text" id="username" name="username">
                <p class="text-red animate-head-shake mb2" v-if="errorFields?.username">{{ errorFields.username[0].message }}</p>

                <label class="mb0.5" for="password">Password:</label>
                <input v-model="formData.password" type="password" id="password" name="password">
                <p class="text-red animate-head-shake mb5" v-if="errorFields?.password">{{ errorFields.password[0].message }}</p>

                <button :disabled="!pass" class="btn flex gap2 items-center wfull justify-center" type="submit">Submit
                    <div v-if="isLoading" class="i-svg-spinners-bars-rotate-fade"></div>
                </button>
            </form>
        </div>
        <div v-if="error?.message" class="text-red text-center mt3">{{error.message}}</div>
    </div>
</template>