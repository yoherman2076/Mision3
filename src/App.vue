<template>
  <main>
    <h1 class="font-sans text-5xl font-bold m-2 flex justify-center">Welcome to la Misión 3</h1>
    <br>
    
    <!-- formulario -->
    <Form @submit-form="receiveData" />
    <br>
  
    <!-- Botón randomizador y la info del bicho-->
    <RandomButton @random-click="getRandomPokemon" />
    <PokimonInfo :loading="loading" :pokemon="pokemon" />  
  </main>
</template>


<script setup lang="ts">
import RandomButton from "./components/RandomButton.vue"
import Form from "./components/Form.vue"
import PokimonInfo from './components/PokimonInfo.vue'
import { usePokimon } from './composable/usePokimon.ts'


// Todas las variables del composable:
const {
  pokemon,
  loading,
  getRandomPokemon,
} = usePokimon()

// función del formulario.
function receiveData(data: {
  name: string
  email:string
}) {
    console.log(data)
}

</script>
