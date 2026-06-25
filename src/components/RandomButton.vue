<template>
  <!-- Este sería el trigger hace una llamada a que es la que luego se utiliza
   en el App.vue para llamar a la función.  -->
  <div class="flex justify-center">
    <BaseButton @click="$emit('random-click')"
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg min-w-45 transition"
    >
      Pokemon aleatorio
    </BaseButton><br>
  </div>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

defineEmits<{
  (e: 'random-click'): void
}>()

</script>
