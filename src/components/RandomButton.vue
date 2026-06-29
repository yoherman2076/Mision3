<template>
<!-- Este sería el trigger hace una llamada a que es la que luego se utiliza
en el App.vue para llamar a la función.  -->
    <BaseButton @click="$emit('random-click')"
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 mt-2 rounded-lg min-w-45 transition hover:scale-[1.02] hover:shadow-cyan-500/40 active:scale-100"
    >
      Pokemon aleatorio
    </BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue'

defineEmits<{
  (e: 'random-click'): void
}>()

</script>
