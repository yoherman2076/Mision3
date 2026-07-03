<template>
    <div class="relative">
        <input 
            :value="modelValue"
            @input="updateValue"
            :placeholder="placeholder"
            :class="[
                'w-full rounded-xl border-2 px-4 py-3 bg-sec/70 ',
                error ? 'pb-6 border-red-500' : 'border-zinc-400'
            ]"
        />
        <!-- w-full rounded-xl border border-zinc-400 bg-slate-800/70 px-4 py-3 text-white placeholder:text-slate-400 transition-all duration-200 outline-none focus:border-violet-500 focus:ring-cyan-500/40 -->
        <p v-if="error" 
            class="absolute left-4.5 bottom-0.5 text-xs text-red-500">
            {{ props.error }}
        </p>
    </div>
</template>

<script setup lang="ts">
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
