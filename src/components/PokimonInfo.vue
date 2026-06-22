<template>
    <div v-if="loading">
        Cargando . . .
    </div>

    <div v-else-if="pokemon">
        <h2 class="text-center font-bold"
        >{{ pokemon.name }}</h2>
    </div>
</template>

<script setup lang="ts">

defineProps<{
    loading: boolean
    pokemon: any
}>()

</script>