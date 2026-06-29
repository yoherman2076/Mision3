<template>
    <main class="min-h-screen bg-linear-to-b from-cyan-700 to-slate-900 text-white py-2">
      <div class="max-w-6xl mx-auto px-6 mb-6 mt-4 flex items-center justify-center">
        <h1 class= "bg-teal-500 max-w-4xl rounded-es-full rounded-se-full text-5xl font-bold text-center px-30 py-4 ">Welcome to la Misión 3</h1>
      </div>
      
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        <div>
          <!-- formulario -->
          <Form @submit-form="receiveData" />
        </div>
        <div class="flex flex-col items-center ">
          <RandomButton @random-click="getRandomPokemon" class="max-w-xs" />
          <!-- Botón randomizador y la info del bicho-->
          <PokimonInfo :loading="loading" :pokemon="pokemon" :pokerror="pokerror"/>
        </div>
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
    return data
}

</script>
