<template>
  
    <main class="min-h-screen bg-gradient-to-b from-cyan-700 to-slate-900 text-white py-5">
      <h1 class="text-5xl font-bold text-center py-7">Welcome to la Misión 3</h1>
      <div class="max-w-4xl mx-auto px-6 space-y-5">
        <!-- formulario -->
        <Form @submit-form="receiveData" />
      
        <!-- Botón randomizador y la info del bicho-->
        <RandomButton @random-click="getRandomPokemon" />
        <PokimonInfo :loading="loading" :pokemon="pokemon" :pokerror="pokerror"/>
      </div>
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
  pokerror,
  getRandomPokemon  
} = usePokimon()

// función del formulario.
function receiveData(data: {
  name: string
  email:string
}) {
    console.log(data)
}

</script>
