<template>
<!-- Este sería el trigger hace una llamada a que es la que luego se utiliza
en el App.vue para llamar a la función.  -->
    <BaseButton @click="$emit('random-click')"
      class="text-white font-semibold px-6 py-3 mt-2 rounded-lg min-w-45 transition duration-400 hover:bg-cuar hover:text-prim"
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
