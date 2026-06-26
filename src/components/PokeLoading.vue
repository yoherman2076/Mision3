<template>
<!-- En el composable se cambia el estado a loading a true entonces sale
    que está cargando. -->
    <div v-if="loading" || !pokemon class="flex justify-center mt-2">
        Cargando . . .
    </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '../types/types.ts'

defineProps<{
    loading: boolean
    pokemon: Pokemon | null
}>()
</script>