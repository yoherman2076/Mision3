<template>
    <div>
        <PokeLoading 
            v-if="loading" 
            :loading="loading" 
            :pokemon="pokemon"
        />
        
        <Error
            class="bg-red-200 border border-red-400 text-red-700 px-4 py-3 rounded text-center"
            v-else-if="pokerror"
            :message="pokerror"
        />
    <!-- Cuando deja de cargar muestra el div con la información del bicho. -->
        <div v-else-if="pokemon">
            <h2 class="text-center font-bold text-3xl p-2 my-1 capitalize">
                {{ pokemon.name }}
            </h2>
            <PokeTipo :types="pokemon.types" class="mt-5"/>
            <PokeImage :pokeimage="pokemon.sprites.front_default" :alt="pokemon.name"/>
        </div>
    </div>

</template>

<script setup lang="ts">
import PokeImage from './PokeImage.vue'
import PokeLoading from './PokeLoading.vue';
import PokeTipo from './PokeTipo.vue'
import type { Pokemon } from '../types/types.ts'
import Error from "./ErrorMessage.vue"


defineProps<{
    loading: boolean
    pokemon: Pokemon | null
    pokerror: string | null
}>()

</script>