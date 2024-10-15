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
    <div center>
        <h2 mb3 font-bold text-5>Sign Up</h2>
        <div p5 bg-base-100 rd-2>
            <form flex flex-col @submit.prevent="handleSubmit">

                <div flex flex-col mb2>
                    <label mb0.5 for="username">Username:</label>
                    <input v-model="formData.username" type="text" id="username" name="username">
                    <p v-if="errorFields?.username" text-red>{{ errorFields.username[0].message }}</p>
                </div>

                <div flex flex-col mb2>
                    <label mb0.5 for="name">Name:</label>
                    <input v-model="formData.name" type="text" id="name" name="name">
                    <p v-if="errorFields?.name" text-red>{{ errorFields.name[0].message }}</p>
                </div>

                <div flex flex-col mb2>
                    <label mb0.5 for="password">Password:</label>
                    <input v-model="formData.password" type="password" id="password" name="password">
                    <p v-if="errorFields?.password" text-red>{{ errorFields.password[0].message }}</p>
                </div>

                <div flex flex-col mb2>
                    <label mb0.5 for="passwordConfirm">Confirm Password:</label>
                    <input v-model="formData.passwordConfirm" type="password" name="passwordConfirm">
                    <p v-if="errorFields?.passwordConfirm" text-red>{{ errorFields.passwordConfirm[0].message }}</p>
                </div>

                <div flex flex-col mb5>
                    <label mb0.5 for="email">Email:</label>
                    <input v-model="formData.email" type="email" name="email" >
                    <p v-if="errorFields?.email" text-red>{{ errorFields.email[0].message }}</p>
                </div>

                <button :disabled="!pass" btn flex gap2 items-center wfull justify-center type="submit">Submit
                    <div v-if="isLoading" i-svg-spinners-bars-rotate-fade></div>
                </button>
            </form>
        </div>
    </div>
</template>