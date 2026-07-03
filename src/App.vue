<template>
  <main class="min-h-screen bg-linear-to-br from-ter via-sec to-prim text-quin">

    <!-- Header -->
    <header class="container mx-auto px-6 pt-10">
      <h1
        class="mx-auto max-w-3xl rounded-full bg-sec py-5 text-center text-5xl font-extrabold shadow-xl backdrop-blur">
        Welcome to la Misión 4
      </h1>
    </header>

    <!-- Contenido -->
    <section class="container mx-auto">
      <div class="grid grid-cols-1 gap-8 mx-8 lg:grid-cols-3 items-start mt-10">

        <!-- Formulario -->
        <div>
          <Form />
        </div>

        <!-- Pokémon -->
        <div class="rounded-xl bg-slate-800/70 p-8 border-2 border-cuar shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20">
          <RandomButton
            @random-click="getRandomPokemon"
            class="flex justify-center mx-auto mb-2 w-full "
          />

          <PokimonInfo
            :loading="loading"
            :pokemon="pokemon"
            :pokerror="pokerror"
          />
        </div>

        <!-- Lista -->
        <div class="rounded-xl bg-slate-800/70 p-8 border-2 border-cuar shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20">
          <TrainerList />
        </div>

      </div>
    </section>

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
