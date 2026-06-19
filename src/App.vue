<template>
  <h1>Welcome to la Misión 3</h1>
  <br>
  
  <!-- formulario -->
  <form @submit.prevent="sendDatos">
    <input v-model="form.name" placeholder="Nombre" class="bg-blue-200 mx-30"/>
    <input v-model="form.email" placeholder="Email" class="bg-blue-200 mx-30"/>
    <button type="submit">Enviar</button>
  </form>
  <br>

  <!-- cargación -->
  <div v-if="loading">
    Cargando . . .
  </div>
  <div v-else-if="pokemon">
    <h2
      class="text-center font-bold"
    >{{ pokemon.name }}</h2>
  </div>
  
  <!-- Botón randomizador -->
  <RandomButton @random-click="getRandomPokemon" />

  <img v-if="sevenUp" :src="sevenUp" alt="poKimon" class="w-80 h-80" >

</template>


<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import RandomButton from "./components/RandomButton.vue"

const apiURL = import.meta.env.VITE_API_URL
const loading = ref(false)
const pokemon = ref<any>(null)
const sevenUp = ref('')


const form = ref({
  name: "",
  email: ""
})

const sendDatos = () => {
  console.log("Datos enviados:", form)

  form.value.name = ""
  form.value.email = ""
}

async function getRandomPokemon() {
  try {
    const randomId = Math.floor(Math.random() * 1025) + 1
  
    const response = await axios.get(`${apiURL}/pokemon/${randomId}`)

    pokemon.value = response.data
    sevenUp.value = pokemon.value.sprites.front_default

  }
  catch (error) {
    console.error("Error garrafal al obtener el pookemon:", error)
  }
  finally {
    await new Promise(resolve => setTimeout(resolve, 500))
    loading.value = false
  }

}

</script>
