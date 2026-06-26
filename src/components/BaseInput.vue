<template>
    <input 
        :value="modelValue"
        @input="updateValue"
        :placeholder="placeholder"
        class="w-full rounded-xl border border-zinc-400 bg-slate-800/70 px-4 py-3 text-white placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-violet-500 focus:ring-cyan-500/40"
    />
</template>
<!-- "border-black border-2 rounded-lg px-2 py-1 mb-1 text-black focus:outline-none focus:ring-3 focus:ring-blue-500" -->

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
