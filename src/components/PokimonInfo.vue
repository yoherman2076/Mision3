<template>
    <PokeLoading v-if="loading" :loading="loading" :pokemon="pokemon"/>
    
    <Error 
        v-else-if="pokerror"
        :message="pokerror"
    />
<!-- Cuando deja de cargar muestra el div con la información del bicho. -->
    <div v-else-if="pokemon">
        <h2 class="text-center font-bold text-3xl p-2 m-1 capitalize">
            {{ pokemon.name }}
        </h2>
        <PokeTipo :types="pokemon.types" class="mb-1"/>
        <PokeImage :pokeimage="pokemon.sprites.front_default" :alt="pokemon.name"/>
    </div>

</template>

<script setup lang="ts">
import PokeImage from './PokeImage.vue'
import PokeLoading from './PokeLoading.vue';
import PokeTipo from './PokeTipo.vue'
import type { Pokemon } from '../types/types.ts'
import Error from "../components/Error.vue"


defineProps<{
    loading: boolean
    pokemon: Pokemon | null
    pokerror: string | null
}>()

</script>