<template>
  <button @click="$emit('random-click')"
    class="bg-blue-600 text-white px-10 py-3 rounded"
  >
    Pokemon aleatorio
  </button><br>

  <img v-if="sevenUp" :src="sevenUp" alt="poKimon" >

</template>

<!-- División divisidora -->

<script setup lang="ts">

import { ref } from 'vue'

const sevenUp = ref('')
defineEmits<{
    (e: "random-click"): void
}>()
</script>
