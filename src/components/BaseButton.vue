<template>
    <button
        :type="type"
        class="w-full rounded-xl border-2 bg-slate-900 py-3 font-semibold text-white hover:bg-slate-800/80 transition"
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