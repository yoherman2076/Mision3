<template>
<!-- Formulario formularioso. Simplemente se puede escribir y cuando se le da a enviar se vacían los campos. -->
<div class="flex justify-center">
    <form @submit.prevent="sendDatos"
        class="columns-2 border-2 bg-indigo-400 rounded-lg w-lg p-2 m-1 rouded-lg ">
        <BaseInput v-model="form.name" placeholder="Nombre"/>
        <BaseInput v-model="form.surname" placeholder="Apellido"/>
        <BaseInput v-model="form.dni" placeholder="DNI"/>
        <BaseInput v-model="form.email" placeholder="Email"/>
        <BaseInput v-model="form.pokemon_assigned" placeholder="Pokemon asignado"/>
        <BaseButton type="submit">Enviar</BaseButton>
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
    console.log('Datos enviados:', form.value)
    form.value = { ...initialForm }
}
</script>
