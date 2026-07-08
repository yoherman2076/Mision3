<template>
<div class="flex-col text-center">
    <h1 
        class="text-9xl my-6"
    >
        Roy, ponle estilo a tu página, monsturo.
    </h1>    
    
    <BaseButton
    class="my-5" 
    @click="router.push('/dashboard')"
    >
    Volver al dashboard.
    </BaseButton>
</div>

</template>

<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>