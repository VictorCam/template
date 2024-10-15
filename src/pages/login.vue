<script setup>
import { reactive } from 'vue'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import { useRouter } from 'vue-router';
const router = useRouter();
import { useAuthStore } from "../store";
let data = import.meta.env.VITE_API_URL

let formData = reactive({
    username: '',
    password: ''
})

let {users, isLoadingUsers, errorUsers, execFetchUsers } = useAuthStore(formData)

const rules = {
    username: { type: 'string', min: 2, max: 50, required: true },
    password: { type: 'string', min: 8, required: true }
}

const { pass, errorFields } = useAsyncValidator(formData, rules)

const handleSubmit = async () => {
    await execFetchUsers()
    if(!errorUsers.value) router.push('/')
}
</script>

<template>
    {{ formData }} <br>
    {{ users }} <br>
    {{ errorUsers }} <br>
    data "{{ data }}" <br>
    <div center>
        <h2 mb3 font-bold text-5>Login</h2>
        <div p5 bg-base-100 rd-2>
            <form flex flex-col @submit.prevent="handleSubmit">
                
                <div flex flex-col mb2>
                    <label mb0.5 for="username">Username:</label>
                    <input v-model="formData.username" type="text" id="username" name="username">
                    <p text-red v-if="errorFields?.username">{{ errorFields.username[0].message }}</p>
                </div>

                <div flex flex-col mb5>
                    <label mb0.5 for="password">Password:</label>
                    <input v-model="formData.password" type="password" id="password" name="password">
                    <p text-red v-if="errorFields?.password">{{ errorFields.password[0].message }}</p>
                </div>

                <button :disabled="!pass" btn flex gap2 items-center wfull justify-center type="submit">Submit
                    <div v-if="isLoadingUsers" i-svg-spinners-bars-rotate-fade></div>
                </button>
            </form>
        </div>
        <div v-if="errorUsers?.message" text-red text-center mt3>{{errorUsers.message}}</div>
    </div>
</template>