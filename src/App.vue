<template>
  <div v-if="pokemon">
    <h1>{{ pokemon.name }}</h1>
    
  </div>
  
</template>


<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const pokemon = ref(null)

try {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  pokemon.value = response.data
}

catch(error) {
  console.error(error)
}

</script>
