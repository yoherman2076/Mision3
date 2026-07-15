<template>
<div class="flex px-8">
    <div>
        <h1 
            class="font-bold text-8xl p-10 my-6"
        >
            SOY UN DASHBOARD
        </h1>
        <h2 class="mx-5 p-8 text-4xl">
            Hola, {{ auth.user }}
        </h2>
    </div>
    <div class="rounded-xl bg-slate-800/70 h-110 w-100 p-4 mx-10 border-2 border-cuar shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:shadow-cyan-500/20">
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
    
</div>

</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import PokimonInfo from '../components/PokimonInfo.vue'
import RandomButton from "../components/RandomButton.vue"
import { usePokimon } from '../composable/usePokimon.ts'


const {
  pokemon,
  loading,
  pokerror,
  getRandomPokemon  
} = usePokimon()

const auth = useAuthStore()

</script>