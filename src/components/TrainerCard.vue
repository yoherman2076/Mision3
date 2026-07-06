<template>
    <div class="pb-3 border-b-2 rounded-2xl border-zinc-400">
        <div class="flex text-xl font-bold capitalize">
            {{ trainer.name }}
            
            <p v-if="trainer.pokemon_assigned" class="px-3 text-amber-300">
                {{ trainer.pokemon_assigned.name }}
            </p>
            <PokeTipo v-if="trainer.pokemon_assigned" :types="trainer.pokemon_assigned.types" />
        </div>
        <div v-if="trainer.pokemon_assigned" class="flex flex-col items-center gap-2">
            
            <Error
                class="bg-red-200 border border-red-400 text-red-700 px-4 py-3 my-5 rounded text-center"
                v-if="pokerror"
                :message="pokerror"
            />
            <img 
                v-else-if="!pokerror"
                class="w-40"
                :src="trainer.pokemon_assigned.sprites.front_default ?? undefined"
                :alt="trainer.pokemon_assigned.name"
            />
        </div>
        
        <div class="flex justify-center">
            <BaseButton 
                @click='editTrainer' 
                class="m-1 px-1 duration-300 hover:bg-cuar hover:text-prim"
            >
                Editar
            </BaseButton>
            
            <BaseButton 
                class="m-1 px-1 duration-300 hover:bg-cuar hover:text-prim"
                @click="showModal = true"
            >
                Eliminar
            </BaseButton>
            
            <BaseButton class="m-1 px-1 duration-300 hover:bg-cuar hover:text-prim"
                @click="assignPokemon()"
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
import PokeTipo from './PokeTipo.vue'
import type { Trainer } from '../types/types'
import Error from './ErrorMessage.vue'

const showModal = ref(false)
const trainerStore = useTrainerStore()
    const { getRandomPokemon, pokerror } = usePokimon()

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