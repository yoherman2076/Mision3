<template>
    <div class="flex justify-center">
        <img 
            v-if="pokeimage"    
            :src="pokeimage" 
            alt="alt"
            class="w-70 h-70 p-1 m-2 object-contain border-3 rounded-2xl bg-gray-500"
            >
    </div>
</template>

<script setup lang="ts">
defineProps<{
    pokeimage: string | null
    alt?: string
}>()

</script>