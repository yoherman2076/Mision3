<template>
<!-- Formulario formularioso. Simplemente se puede escribir y cuando se le da a enviar se vacían los campos. -->
    <div class="flex justify-center">
        <form @submit.prevent="sendDatos"
            class="mx-auto flex max-w-md flex-col border-4 bg-slate-800/80 rounded-lg shadow-2xl p-6 space-y-6 border-slate-800/70">
            <div class="text-center">
                <h2 class="text-2xl font-bold text-white">
                    Entrenador Pokimon
                </h2>

            </div>
            
            <BaseInput v-model="form.name" placeholder="Nombre"/>
            <BaseInput v-model="form.surname" placeholder="Apellido"/>
            <BaseInput v-model="form.dni" placeholder="DNI"/>
            <BaseInput v-model="form.email" placeholder="Email"/>
            <BaseButton class="px-7 py-1" type="submit">Enviar</BaseButton>
        </form>
    </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'
// Para cuando el formulario funcione, ya tendré medio camino hecho porque los datos ya tienen
// el espacio para que tengan valor.
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue';
import type { TrainerForm } from '../types/types.ts'
import { useTrainerStore } from '../stores/trainerStores.ts'


const trainerStore = useTrainerStore()

const initialForm: TrainerForm = {
    name: "",
    surname: "",
    dni: "",
    email: ""
}

const form = ref<TrainerForm>({ ...initialForm })

watch(
    () => trainerStore.editingTrainer,
    (trainer) => {
        if (!trainer) return
            form.value = {
                name: trainer.name,
                surname: trainer.surname,
                dni: trainer.dni,
                email: trainer.email
            }
    }
)

const sendDatos = () => {
    if (trainerStore.editingTrainer) {
        const updatedTrainer = {
            ...trainerStore.editingTrainer,
            ...form.value
        }
        trainerStore.updateTrainer(updatedTrainer)
        trainerStore.clearEditing()
        form.value = { ...initialForm }
    } else {
        trainerStore.addTrainer(form.value)
    }
    form.value = { ...initialForm }
}
</script>
