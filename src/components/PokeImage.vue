<template>
    <div class="flex justify-center">
        <img 
            v-if="pokeimage"    
            :src="pokeimage" 
            alt="alt"
            class="w-60 h-60 p-1 mt-4 object-contain border-3 rounded-2xl bg-slate-600/70 shadow-2xl backdrop-blur transition duration-400 hover:-translate-y-1 hover:shadow-cyan-500/20"
        >
    </div>
</template>

<script setup lang="ts">
defineProps<{
    pokeimage: string | null
    alt?: string
}>()

</script>