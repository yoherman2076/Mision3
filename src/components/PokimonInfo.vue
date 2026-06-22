<template>
    <div v-if="loading" || !pokemon>
        Cargando . . .
    </div>
    <template v-else-if="pokemon">
        <h2 class="text-center font-bold"
        >{{ pokemon.name }}</h2>
        <img :src="pokemon.sprites.front_default" class="w-80 h-80" />
    </template>

</template>

<script setup lang="ts">

defineProps<{
    loading: boolean
    pokemon: any
}>()

</script>