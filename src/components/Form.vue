<template>
  <form @submit.prevent="sendDatos">
    <input v-model="form.name" placeholder="Nombre" class="bg-blue-200 mx-30"/>
    <input v-model="form.apellido" placeholder="Apellido" class="bg-blue-200 mx-30"/>
    <input v-model="form.dni" placeholder="DNI" class="bg-blue-200 mx-30"/>
    <input v-model="form.email" placeholder="Email" class="bg-blue-200 mx-30"/>
    <input v-model="form.pokemon_assigned" placeholder="Pokemon asignado" class="bg-blue-200 mx-30"/>
    <button type="submit">Enviar</button>
  </form>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
    (e: "submit-form", data: {
        name: string
        apellido: string
        dni: string
        email: string
        pokemon_assigned: string
    }): void
}>()

const form = ref({
name: "",
apellido: "",
dni: "",
email: "",
pokemon_assigned: ""
})

const sendDatos = () => {
    emit("submit-form", {
        name: form.value.name,
        apellido: form.value.apellido,
        dni: form.value.dni,
        email: form.value.email,
        pokemon_assigned: form.value.pokemon_assigned
    })
    console.log("Datos enviados:", form.value)

    form.value.name = ""
    form.value.apellido = ""
    form.value.dni = ""
    form.value.email = ""
    form.value.pokemon_assigned = ""
}


</script>