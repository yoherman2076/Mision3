<template>
<!-- Formulario formularioso. Simplemente se puede escribir y cuando se le da a enviar se vacían los campos. -->
<div class="flex justify-center">
    <form class="columns-2 border rounded-lg w-lg bg-white rouded-lg px-7 py-4">
        <BaseInput v-model="form.name" placeholder="Nombre"/>
        <BaseInput v-model="form.surname" placeholder="Apellido"/>
        <BaseInput v-model="form.dni" placeholder="DNI"/>
        <BaseInput v-model="form.email" placeholder="Email"/>
        <BaseInput v-model="form.pokemon_assigned" placeholder="Pokemon asignado"/>
    </form>
</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
// Para cuando el formulario funcione, ya tendré medio camino hecho porque los datos ya tienen
// el espacio para que tengan valor.
import BaseInput from './BaseInput.vue'

const emit = defineEmits < {
    (e: "submit-form", data: {
        name: string
        surname: string
        dni: string
        email: string
        pokemon_assigned: string
    }): void
} > ()

const form = ref({
    name: "",
    surname: "",
    dni: "",
    email: "",
    pokemon_assigned: ""
})
// Los datos se ""envían"", en realidad aparecen en la consola y ya está.
const sendDatos = () => {
    emit("submit-form", {
        name: form.value.name,
        surname: form.value.surname,
        dni: form.value.dni,
        email: form.value.email,
        pokemon_assigned: form.value.pokemon_assigned
    })
    console.log("Datos enviados:", form.value)

    form.value.name = ""
    form.value.surname = ""
    form.value.dni = ""
    form.value.email = ""
    form.value.pokemon_assigned = ""
}
</script>
