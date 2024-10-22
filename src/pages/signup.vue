<script setup>
import PocketBase from 'pocketbase';
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useAsyncState } from '@vueuse/core'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
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

const rules = {
    username: { type: 'string', min: 2, max: 50, required: true },
    name: { type: 'string', min: 2, max: 50, required: true },
    password: { type: 'string', min: 8, required: true },
    passwordConfirm: { type: 'string', min: 8, required: true },
    email: { type: 'string', min: 5, max: 50, required: true }
}

const { pass, errorFields } = useAsyncValidator(formData, rules)

const handleSubmit = async () => {
    await execute()
    if(!error.value) router.push('/login')
    alert(error.value)
}
</script>
<template>
        <div class="flex flex-col justify-center items-center mt10">
            <h2 class="mb3 font-bold text-5 text-left text-left">Sign Up</h2>
            <div class="p5 bg-base-100 rd-2">
                <form class="flex flex-col" @submit.prevent="handleSubmit">
                    <div class="flex flex-col mb2">
                        <label class="mb0.5" for="username">Username:</label>
                        <input id="username" v-model="formData.username" type="text" name="username">
                        <p v-if="errorFields?.username" class="text-red">{{ errorFields.username[0].message }}</p>
                    </div>
                    <div class="flex flex-col mb2">
                        <label class="mb0.5" for="name">Name:</label>
                        <input id="name" v-model="formData.name" type="text" name="name">
                        <p v-if="errorFields?.name" class="text-red">{{ errorFields.name[0].message }}</p>
                    </div>
                    <div class="flex flex-col mb2">
                        <label class="mb0.5" for="password">Password:</label>
                        <input id="password" v-model="formData.password" type="password" name="password">
                        <p v-if="errorFields?.password" class="text-red">{{ errorFields.password[0].message }}</p>
                    </div>
                    <div class="flex flex-col mb2">
                        <label class="mb0.5" for="passwordConfirm">Confirm Password:</label>
                        <input v-model="formData.passwordConfirm" type="password" name="passwordConfirm">
                        <p v-if="errorFields?.passwordConfirm" class="text-red">{{ errorFields.passwordConfirm[0].message }}</p>
                    </div>
                    <div class="flex flex-col mb5">
                        <label class="mb0.5" for="email">Email:</label>
                        <input v-model="formData.email" type="email" name="email">
                        <p v-if="errorFields?.email" class="text-red">{{ errorFields.email[0].message }}</p>
                    </div>
                    <button :disabled="!pass" class="btn flex gap2 items-center wfull justify-center" type="submit">Submit
                        <div v-if="isLoading" class="i-svg-spinners-bars-rotate-fade"></div>
                    </button>
                </form>
            </div>
        </div>
</template>