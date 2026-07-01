<template>
    <div class="pb-3 border-b-2 rounded-2xl border-zinc-400">
        <div class="flex text-xl font-bold capitalize">
            {{ trainer.name }}
            
            <p v-if="trainer.pokemon_assigned" class="px-3 text-amber-300">
                {{ trainer.pokemon_assigned.name }}
            </p>
        </div>
        <div class="flex justify-center">
            <img class="w-40"
            v-if="trainer.pokemon_assigned"
            :src="trainer.pokemon_assigned.sprites.front_default"
            :alt="trainer.pokemon_assigned.name"
            />
        </div>
        
        <div class="flex justify-center">
            <BaseButton @click='editTrainer' class="m-1 px-1">
                Editar
            </BaseButton>
            
            <BaseButton class="m-1 px-1"
            @click="showModal = true">
            Eliminar
            </BaseButton>
            
            <BaseButton class="m-1 px-1"
                @click="assignPokemon(props.trainer.id)"
            >
                Asignar Pocket Monster
            </BaseButton>
        </div>
    </div>

    <DeleteModal 
        :show="showModal"
        @confirm="confirmDelete"
        @cancel="cancelDelete"
    />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTrainerStore } from '../stores/trainerStores'
import { usePokimon } from '../composable/usePokimon'
import BaseButton from '../components/BaseButton.vue'
import DeleteModal from './DeleteModal.vue'

const showModal = ref(false)
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

function confirmDelete() {
    trainerStore.deleteTrainer(props.trainer.id)
    showModal.value = false
}

function cancelDelete() {
    showModal.value = false
}
</script>