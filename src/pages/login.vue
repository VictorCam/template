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

const handleSubmit = async () => {
    await execLogin(0, formData)
    if(!errorLogin.value) router.push('/')
}

let { errorLogin,isLoadingLogin,execLogin } = useAuthStore()

const rules = {
    username: { type: 'string', min: 2, max: 50, required: true },
    password: { type: 'string', min: 8, required: true }
}

const { pass, errorFields } = useAsyncValidator(formData, rules)

</script>

<template>
    <div class="center">
        <h2 class="mb3 font-bold text-5">Login</h2>
        <div class="p5 bg-base-100 rd-2 w90 <sm:wfit">
            <form class="flex flex-col" @submit.prevent="handleSubmit">
                <!-- username -->
                <div class="flex flex-col mb4">
                    <label class="mb1" for="username">Username:</label>
                    <input id="username" v-model="formData.username" type="text" name="username" autocomplete="username">
                    <p v-if="errorFields?.username" class="c-red mt1 h3ch">{{ errorFields.username[0].message }}</p>
                </div>
                <!-- password -->
                <div class="flex flex-col mb7">
                    <label class="mb1" for="password">Password:</label>
                    <input id="password" v-model="formData.password" type="password" name="password" autocomplete="current-password">
                    <p v-if="errorFields?.password" class="c-red mt1 h3ch">{{ errorFields.password[0].message }}</p>
                </div>
                <!-- submit -->
                <button :disabled="!pass" class="btn flex gap-2 items-center w-full justify-center" type="submit">
                    Submit
                    <div v-if="isLoadingLogin" class="i-svg-spinners-bars-rotate-fade"></div>
                </button>
            </form>
        </div>
        <div v-if="errorLogin?.message" class="c-red text-center mt-3">{{errorLogin.message}}</div>
    </div>
</template>
