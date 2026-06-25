<template>
    <!-- En el composable se cambia el estado a loading a true entonces sale
     que está cargando. -->
    <div v-if="loading" || !pokemon class="flex justify-center ">
        Cargando . . .
    </div>
    <!-- Cuando deja de cargar muestra el div con la información del bicho. -->
    <div v-else-if="pokemon">
        <h2 class="text-center font-bold p-5"
        >{{ pokemon.name }}</h2>
        <p class="flex justify-center">
            Tipo:
            <span v-for="t in pokemon.types" :key="t.type.name" class="to-black font-bold ">
                {{t.type.name }}
            </span>
        </p>
        <!-- <img :src="pokemon.sprites.front_default" class="max-w-sm mx-auto w-80 h-80 m-1" /> -->
        <PokeImage :pokeimage="pokemon?.sprites?.front_default" :alt="pokemon?.name" />
    </div>

</template>

<script setup lang="ts">
import PokeImage from './PokeImage.vue'
defineProps<{
    loading: boolean
    pokemon: any
}>()

</script>