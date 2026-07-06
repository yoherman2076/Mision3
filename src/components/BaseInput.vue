<template>
    <div class="relative">
        <input 
            :value="modelValue"
            @input="updateValue"
            :placeholder="placeholder"
            :class="[
                'w-full rounded-xl border-2 px-4 py-3 bg-sec/70 focus:border-amber-400 focus:outline-none',
                error ? 'pb-4 border-red-500' : 'border-quin'
            ]"
        />
        
        <ErrorMessage
            v-if="props.error"
            :message="props.error"
            classes="absolute left-4.5 bottom-0.5 text-xs text-red-500"
        />
    </div>
</template>

<script setup lang="ts">
import ErrorMessage from './ErrorMessage.vue'
const props = defineProps<{
    modelValue: string
    placeholder: string
    error?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>
