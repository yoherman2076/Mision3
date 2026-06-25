<template>
    <div class="flex justify-center">
        <img 
            v-if="pokeimage"    
            :src="pokeimage" 
            alt="poKimon"
            class="w74 h-74 object-contain"
            >
    </div>
</template>

<script setup lang="ts">
defineProps<{
    pokeimage: string
    alt?: string
}>()

</script>