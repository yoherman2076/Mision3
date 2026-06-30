<template>
<div>
    {{ trainer.name }}
    <BaseButton @click='editTrainer' class="mx-4">
        Editar
    </BaseButton>
    
    <BaseButton class="m-4"
        @click="trainerStore.deleteTrainer(props.trainer.id)">
        Eliminar
    </BaseButton>

    <BaseButton class="m-4"
        v-if="!trainer.pokemon_assigned"
        @click="assignPokemon(props.trainer.id)"
    >
        Asignar Pocket Monster
    </BaseButton>

    <p v-if="trainer.pokemon_assigned">
    {{ trainer.pokemon_assigned.name }}
    </p>
    <img
    v-if="trainer.pokemon_assigned"
    :src="trainer.pokemon_assigned.sprites.front_default"
    :alt="trainer.pokemon_assigned.name"
    />
</div>
</template>

<script setup lang="ts">
import { useTrainerStore } from '../stores/trainerStores'
import { usePokimon } from '../composable/usePokimon'
import BaseButton from '../components/BaseButton.vue'

const trainerStore = useTrainerStore()
const { getRandomPokemon } = usePokimon()

const props = defineProps<{
    trainer: Trainer
}>()


async function assignPokemon() {
    const pokemon = await getRandomPokemon()
    if(!pokemon) return
    trainerStore.assignPokemon(props.trainer.id, pokemon)
}

function editTrainer() {
    trainerStore.startEditing(props.trainer)
}
</script>