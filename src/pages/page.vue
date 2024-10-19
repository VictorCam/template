<script setup>
import { reactive } from 'vue'
const formData = reactive({
    username: '',
    emailAddress: '',
    password: '',
    comments: '',
    preference: '',
    optionA: false,
    optionB: false,
    optionC: false,
    rangeSlider: 50,
    dateOfBirth: '',
    phoneNumber: ''
});


const handleSubmit = () => {
    console.log(formData)
}
</script>
<template>
    <!-- accessible form -->
    <div class="absolute">
        <form id="comprehensiveForm" class="flex flex-col p-2 w-fit" @submit.prevent="handleSubmit">
            <h2>Comprehensive Accessible Form</h2>
            <p class="mb-2">Please fill out this form to submit your information.</p>
            <!-- Text Input -->
            <label for="username">Username:</label>
            <input id="username" v-model="formData.username" autocomplete="username" class="mb-2" type="text" name="username" required placeholder="Your Username">
            <!-- Email Input -->
            <label for="emailAddress">Email Address:</label>
            <input id="emailAddress" v-model="formData.emailAddress" autocomplete="email" class="mb-2" type="email" name="emailAddress" required placeholder="you@example.com">
            <!-- Password Input -->
            <label for="password">Password:</label>
            <input id="password" v-model="formData.password" class="mb-2" autocomplete="current-password" type="password" name="password" required placeholder="Enter your password">
            <!-- Multi-Line Textarea -->
            <label for="comments">Comments:</label>
            <textarea id="comments" v-model="formData.comments" class="mb-2" name="comments" rows="5" cols="30" required placeholder="Any comments?"></textarea>
            <!-- Radio Buttons -->
            <fieldset class="mb-2 flex gap-3">
                <legend>Choose Your Preference:</legend>
                <div class="flex gap-3">
                    <label><input v-model="formData.preference" type="radio" value="option1"> Option 1</label>
                    <label><input v-model="formData.preference" type="radio" value="option2"> Option 2</label>
                    <label><input v-model="formData.preference" type="radio" value="option3"> Option 3</label>
                </div>
            </fieldset>
            <!-- Checkboxes -->
            <fieldset class="mb-2 flex gap-3">
                <legend>Select Options:</legend>
                <div class="flex gap-3">
                    <label><input v-model="formData.optionA"> type="checkbox" Option A</label>
                    <label><input v-model="formData.optionB"> type="checkbox" Option B</label>
                    <label><input v-model="formData.optionC"> type="checkbox" Option C</label>
                </div>
            </fieldset>
            <!-- Range Slider -->
            <div class="mb-2">
                <label for="rangeSlider">Select a number between 1 and 100:</label>
                <input id="rangeSlider" v-model.number="formData.rangeSlider" class="mb-2" type="range" name="rangeSlider" min="1" max="100" step="1" value="50">
            </div>
            <!-- Date Input -->
            <div class="mb-2">
                <label for="dateOfBirth">Date of Birth:</label>
                <input id="dateOfBirth" v-model="formData.dateOfBirth" class="mb-2" type="date" name="dateOfBirth">
            </div>
            <!-- Telephone Input -->
            <div class="mb-2">
                <label for="phoneNumber">Phone Number:</label>
                <input id="phoneNumber" v-model="formData.phoneNumber" class="mb-2" type="tel" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
            </div>
            <button class="btn flex gap-2 items-center w-full justify-center" type="submit"><span>Submit</span></button>
        </form>
    </div>
</template>

<style scoped>
input,
textarea {
    --uno: rd-2 dark:b-dark b-solid p1;
}

.testing3:hover {
    --uno: test2;
}

input:hover,
textarea:hover {
    --uno: dark:b-dark-400;
}

input:focus {
    --uno: b-solid;
}
</style>