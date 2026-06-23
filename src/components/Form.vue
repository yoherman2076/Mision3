<template>
    <!-- Formulario formularioso. Simplemente se puede escribir y cuando se le da a enviar se vacían los campos. -->
    <div class="flex justify-center">
        <form @submit.prevent="sendDatos" 
        class="columns-2 border rounded-lg w-lg bg-white rouded-lg px-7 py-4">
          <input v-model="form.name" placeholder="Nombre" 
          class="border rounded-lg p-2 m-1 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.apellido" placeholder="Apellido" 
          class="border rounded-lg p-2 m-1 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.dni" placeholder="DNI" 
          class="border rounded-lg p-2 m-1 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.email" placeholder="Email" 
          class="border rounded-lg p-2 m-1 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <input v-model="form.pokemon_assigned" placeholder="Pokemon asignado" 
          class="border rounded-lg p-2 m-1 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          <button type="submit"
          class="bg-red-500 text-white m-1 p-10 rounded-lg py-2 hover:bg-red-600"
          >Enviar</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Para cuando el formulario funcione, ya tendré medio camino hecho porque los datos ya tienen
// el espacio para que tengan valor.
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
// Los datos se ""envían"", en realidad aparecen en la consola y ya está.
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