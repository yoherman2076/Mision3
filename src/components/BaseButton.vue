<template>
    <button
        :type="type"
        class="bg-red-500 text-white m-2 px-4 py-2 rounded-lg hover:bg-red-600"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import type { Buttons } from '../types/types'

withDefaults(
    defineProps<{
        type?: Buttons
    }>(),
    {
        type: 'button'
    }
)
</script>