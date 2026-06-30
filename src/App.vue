<template>
    <main class="min-h-screen bg-linear-to-b from-cyan-700 to-slate-900 text-white py-2">
      <div class="max-w-6xl mx-auto px-6 mb-6 mt-4 flex justify-center">
        <h1 class= "bg-teal-500 max-w-4xl rounded-es-full rounded-se-full text-5xl font-bold text-center px-30 py-4 ">Welcome to la Misión 3</h1>
      </div>
    <!-- Grid de 3 columnas -->
      <div class="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 items-start">
        <!-- Columna 1 -->
        <div class="flex justify-center">
          <!-- formulario -->
          <Form  />
        </div>
        <!-- Columna 2 -->
        <div class=" max-w-md border-4  bg-slate-800/80 rounded-lg shadow-2xl p-6 space-y-6 flex flex-col items-center">
          <RandomButton @random-click="getRandomPokemon" class="w-full max-w-xs" />
          <!-- Botón randomizador y la info del bicho-->
          <PokimonInfo :loading="loading" :pokemon="pokemon" :pokerror="pokerror"/>
        </div>
        <!-- columna 3 -->
        <div class="flex max-w-md flex-col border-4 bg-slate-800/80 rounded-lg shadow-2xl p-6 space-y-6 border-slate-800/70">
          <TrainerList />
        </div>
      </div>
    </main>
</template>


<script setup lang="ts">
import RandomButton from "./components/RandomButton.vue"
import Form from "./components/TrainerForm.vue"
import PokimonInfo from './components/PokimonInfo.vue'
import { usePokimon } from './composable/usePokimon.ts'
import TrainerList from "./components/TrainerList.vue"


// Todas las variables del composable:
const {
  pokemon,
  loading,
  pokerror,
  getRandomPokemon  
} = usePokimon()


</script>
