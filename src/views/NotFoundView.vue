<template>
<main class="min-h-screen bg-linear-to-br from-ter via-sec to-prim text-quin">
    <div class="flex-col text-center">
        <h1 
            class="text-9xl py-30"
        >
            Roy, ponle estilo a tu página, monsturo.
        </h1>    
        
        <BaseButton
        class="my-5 px-3" 
        @click="router.push({ name: 'dashboard' })"
        >
        Volver al dashboard.
        </BaseButton>
    </div>
</main>

</template>

<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>