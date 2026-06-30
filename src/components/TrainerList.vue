<template>
<div
    v-for="trainer in trainerStore.trainers"
    :key="trainer.id"
>
    {{ trainer.name }}
    <button 
        @click="trainerStore.deleteTrainer(trainer.id)"
         class="mt-2 rounded bg-red-600 px-3 py-1 hover:bg-red-700"
    >
        Eliminar
    </button>
    <button
        v-if="!trainer.pokemon_assigned"
        @click="assignPokemon(trainer.id)"
    >
        Asignar Pocket Monster
    </button>
    <p v-if="trainer.pokemon_assigned">
    {{ trainer.pokemon_assigned.name }}
    </p>
    <img
    v-if="trainer.pokemon_assigned"
    :src="trainer.pokemon_assigned.sprites.front_default"
    :alt="trainer.pokemon_assigned.name"
    />
    <button @click="trainerStore.startEditing(trainer)">
        Editar
    </button>
</div>
</template>

<script setup lang="ts">
import { useTrainerStore } from '../stores/trainerStores'
import { usePokimon } from '../composable/usePokimon'
// import BaseButton from './BaseButton.vue';
const trainerStore = useTrainerStore()
const { getRandomPokemon } = usePokimon()

async function assignPokemon(id: string) {
    const pokemon = await getRandomPokemon()
    if (!pokemon) return
    trainerStore.assignPokemon(id, pokemon)
} 
</script>