<template>
  <div class="flex justify-center">
    <button @click="$emit('random-click')"
      class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg min-w-[180px] transition"
    >
      Pokemon aleatorio
    </button><br>
  </div>

</template>

<!-- División divisidora -->

<script setup lang="ts">
defineEmits<{
  (e: 'random-click'): void
}>()

</script>
