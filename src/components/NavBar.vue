<template>
<div class="flex justify-center py-4 gap-3">
    <BaseButton
        class="hover:bg-ter transition p-3"
        @click="router.push('/trainers')"> 
            trainers 
    </BaseButton>
    <BaseButton 
        class="hover:bg-ter transition p-3"
        @click="router.push('/dashboard')"> 
            bordecarrera 
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


const router = useRouter()
const auth = useAuthStore()

function handleLogout() {
    auth.isAuthenticated = false
    router.push('login')
}
</script>