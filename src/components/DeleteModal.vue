<template>
    <Teleport to="body">
        <div
          v-if="props.show"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        >
          <div class="max-w-md rounded-lg bg-slate-800 p-6 shadow-xl">
            <h2 class="mb-6 text-center text-xl font-bold text-white">
              ¿Seguro que quieres eliminar este entrenador?
            </h2>
      
            <div class="flex gap-4">
              <BaseButton
                class="bg-slate-600 hover:bg-slate-700"
                @click="emit('cancel')"
              >
                Cancelar
              </BaseButton>
      
              <BaseButton
                @click="emit('confirm')"
              >
                Eliminar
              </BaseButton>
            </div>
          </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';

const props = defineProps<{
    show: boolean
}>()

const emit = defineEmits<{
    (e: 'confirm'): void
    (e: 'cancel'): void
}>()
</script>