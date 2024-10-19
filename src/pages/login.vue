<script setup>
import { reactive } from 'vue'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import { useRouter } from 'vue-router';
const router = useRouter();
import { useAuthStore } from "../store";

let formData = reactive({
    username: '',
    password: ''
})

let { userLogin,execLogin,errorLogin,isLoadingLogin,isLoggedIn,logout,execLogout,execCheckLoggedIn } = useAuthStore(formData)

const rules = {
    username: { type: 'string', min: 2, max: 50, required: true },
    password: { type: 'string', min: 8, required: true }
}

const { pass, errorFields } = useAsyncValidator(formData, rules)

const handleSubmit = async () => {
    await execLogin()
    if(!errorLogin.value) router.push('/')
}
</script>

<template>
    <button class="btn" @click="execLogout()">Logout</button>
    Logout: {{ logout }} <br>
    Login: {{ isValid }}
    <div class="center">
        <h2 class="mb-3 font-bold text-5">Login</h2>
        <div class="p-5 bg-base-100 rd-2">
            <form class="flex flex-col" @submit.prevent="handleSubmit">
                <!-- username -->
                <div class="flex flex-col mb-2">
                    <label class="mb-0.5" for="username">Username:</label>
                    <input v-model="formData.username" type="text" id="username" name="username">
                    <p class="text-red" v-if="errorFields?.username">{{ errorFields.username[0].message }}</p>
                </div>
                <!-- password -->
                <div class="flex flex-col mb-5">
                    <label class="mb-0.5" for="password">Password:</label>
                    <input v-model="formData.password" type="password" id="password" name="password">
                    <p class="text-red" v-if="errorFields?.password">{{ errorFields.password[0].message }}</p>
                </div>
                <!-- submit -->
                <button :disabled="!pass" class="btn flex gap-2 items-center w-full justify-center" type="submit">
                    Submit
                    <div v-if="isLoadingLogin" class="i-svg-spinners-bars-rotate-fade"></div>
                </button>
            </form>
        </div>
        <div v-if="errorLogin?.message" class="text-red text-center mt-3">{{errorLogin.message}}</div>
    </div>
</template>
