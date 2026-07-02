<template>
  <form
    @submit.prevent="sendDatos"
    class="rounded-xl border border-slate-700 bg-slate-800/70 p-8 space-y-6 shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20"
  >
    <!-- Cabecera -->
    <div class="text-center space-y-2">
      <h2 class="text-3xl font-bold text-white">
        Entrenador Pokémon
      </h2>

      <p class="text-sm text-slate-300">
        Introduce tus datos para registrarte.
      </p>
    </div>

    <!-- Campos -->
    <div class="space-y-4">
      <BaseInput
        v-model="form.name"
        placeholder="Nombre"
      />

      <BaseInput
        v-model="form.surname"
        placeholder="Apellido"
      />

      <BaseInput
        v-model="form.dni"
        placeholder="DNI"
      />

      <BaseInput
        v-model="form.email"
        placeholder="Correo electrónico"
      />
    </div>

    <!-- Botón -->
    <BaseButton
      type="submit"
      class="w-full rounded-lg py-2.5 text-lg font-semibold transition duration-300 hover:bg-cuar hover:text-prim"
    >
      Enviar
    </BaseButton>
  </form>
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
        
    } else {
        trainerStore.addTrainer(form.value)
    }
    form.value = { ...initialForm }
}
</script>
