<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute('/params/[id]')
</script>

<template>
    <p>Parameter is: {{route.params.id }}</p>
</template>