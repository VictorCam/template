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
    <form @submit.prevent="handleSubmit" class="flex flex-col p2 w-fit" id="comprehensiveForm">
        <h2>Comprehensive Accessible Form</h2>
        <p class="mb2">Please fill out this form to submit your information.</p>

        <!-- Text Input -->
        <label for="username">Username:</label>
        <input autocomplete="username" v-model="formData.username" class="mb2" type="text" id="username" name="username"
            required placeholder="Your Username">

        <!-- Email Input -->
        <label for="emailAddress">Email Address:</label>
        <input autocomplete="email" v-model="formData.emailAddress" class="mb2" type="email" id="emailAddress"
            name="emailAddress" required placeholder="you@example.com">

        <!-- Password Input -->
        <label for="password">Password:</label>
        <input v-model="formData.password" class="mb2" autocomplete="current-password" type="password" id="password"
            name="password" required placeholder="Enter your password">

        <!-- Multi-Line Textarea -->
        <label for="comments">Comments:</label>
        <textarea v-model="formData.comments" class="mb2" id="comments" name="comments" rows="5" cols="30" required
            placeholder="Any comments?"></textarea>

        <!-- Radio Buttons -->
        <fieldset class="mb2 flex gap3">
            <legend>Choose Your Preference:</legend>
            <div class="flex gap3">
                <label><input type="radio" v-model="formData.preference" value="option1"> Option 1</label>
                <label><input type="radio" v-model="formData.preference" value="option2"> Option 2</label>
                <label><input type="radio" v-model="formData.preference" value="option3"> Option 3</label>
            </div>
        </fieldset>

        <!-- Checkboxes -->
        <fieldset class="mb2 flex gap-3">
            <legend>Select Options:</legend>
            <div class="flex gap3">
                <label><input type="checkbox" v-model="formData.optionA"> Option A</label>
                <label><input type="checkbox" v-model="formData.optionB"> Option B</label>
                <label><input type="checkbox" v-model="formData.optionC"> Option C</label>
            </div>
        </fieldset>

        <!-- Range Slider -->
        <div class="mb2">
            <label for="rangeSlider">Select a number between 1 and 100:</label>
            <input v-model.number="formData.rangeSlider" class="mb2" type="range" id="rangeSlider" name="rangeSlider"
                min="1" max="100" step="1" value="50">
        </div>

        <!-- Date Input -->
        <div class="mb2">
            <label for="dateOfBirth">Date of Birth:</label>
            <input v-model="formData.dateOfBirth" class="mb2" type="date" id="dateOfBirth" name="dateOfBirth">
        </div>

        <!-- Telephone Input -->
        <div class="mb2">
            <label for="phoneNumber">Phone Number:</label>
            <input v-model="formData.phoneNumber" class="mb2" type="tel" id="phoneNumber" name="phoneNumber"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
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