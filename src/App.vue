<template>
  <h1>Welcome to la Misión 3</h1>
  <br>
  
  <!-- formulario -->
  <Form @submit-form="receiveData" />
  <br>

  
  <!-- Botón randomizador -->
  <RandomButton @random-click="getRandomPokemon" />
  <PokimonInfo :loading="loading" :pokemon="pokemon" />
  <Image v-if="sevenUp" :image="sevenUp" class="w-80 h-80" alt="laptmadr"/>

</template>


<script setup lang="ts">


import RandomButton from "./components/RandomButton.vue"
import Form from "./components/Form.vue"
import { usePokimon } from './composable/usePokimon.ts'
import Image from "./components/PokeImage.vue"
import PokimonInfo from './components/PokimonInfo.vue'

const {
  pokemon,
  loading,
  getRandomPokemon,
  sevenUp
} = usePokimon()

function receiveData(data: {
  name: string
  email:string
}) {
    console.log(data)
}

</script>
