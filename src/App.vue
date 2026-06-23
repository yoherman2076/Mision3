<template>
  <h1>Welcome to la Misión 3</h1>
  <br>
  
  <!-- formulario -->
  <Form @submit-form="receiveData" />
  <br>

  
  <!-- Botón randomizador -->
  <RandomButton @random-click="getRandomPokemon" class="bg-blue-600 text-white px-10 py-3 rounded" />
  <PokimonInfo :loading="loading" :pokemon="pokemon" />
  
</template>


<script setup lang="ts">

import RandomButton from "./components/RandomButton.vue"
import Form from "./components/Form.vue"
import { usePokimon } from './composable/usePokimon.ts'
import PokimonInfo from './components/PokimonInfo.vue'

const {
  pokemon,
  loading,
  getRandomPokemon,
} = usePokimon()

function receiveData(data: {
  name: string
  email:string
}) {
    console.log(data)
}

</script>
