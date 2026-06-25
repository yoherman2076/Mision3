<template>
    <input 
        :value="modelValue"
        @input="updateValue"
        :placeholder="placeholder"
        class="border rounded-lg p-2 m-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
