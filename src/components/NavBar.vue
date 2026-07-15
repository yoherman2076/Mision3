<template>
<div class="flex justify-center py-4 gap-3">
    <BaseButton
        v-for="link in links"
        :key="link.name"
        class="hover:bg-ter transition p-3"
        @click="router.push({ name: link.name })"> 
            {{ link.label }}
    </BaseButton>
    
    <BaseButton 
        class="hover:bg-ter transition p-3"
        @click="handleLogout"> 
            logout 
    </BaseButton>
</div>

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseButton from '../components/BaseButton.vue';
import { useAuthStore } from '../stores/auth'

const links = [
    {
        label: 'Trainers',
        name: 'trainers',
    },
    {
        label: 'Dashboard',
        name: 'dashboard',
    },
]

const router = useRouter()
const auth = useAuthStore()

function handleLogout() {
    auth.isAuthenticated = false
    router.push({ name: 'login' })
}
</script>