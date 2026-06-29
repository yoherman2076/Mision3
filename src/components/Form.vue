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
            <BaseInput v-model="form.pokemon_assigned" placeholder="Pokemon asignado"/>
            <BaseButton class="px-7 py-1" type="submit">Enviar</BaseButton>
        </form>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
// Para cuando el formulario funcione, ya tendré medio camino hecho porque los datos ya tienen
// el espacio para que tengan valor.
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue';
import type { Form } from '../types/types.ts'

const emit = defineEmits < {
    (e: 'submit-form', data: Form): void
}>()

const initialForm: Form = {
    name: "",
    surname: "",
    dni: "",
    email: "",
    pokemon_assigned: ""
}

const form = ref<Form>({ ...initialForm })
const sendDatos = () => {
    emit('submit-form', form.value)   
    form.value = { ...initialForm }
}
</script>
