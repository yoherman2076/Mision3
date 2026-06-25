<template>
    <input 
        :value="modelValue"
        @input="updateValue"
        :placeholder="placeholder"
        class="border-black border-2 rounded-lg p-1 m-1 text-black focus:outline-none focus:ring-3 focus:ring-blue-500"
    />
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: string
    placeholder: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>
