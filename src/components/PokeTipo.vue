<template>
    <div class="flex justify-center items-center gap-2">
        <span 
            v-for="t in types" 
            :key="t.type.name" 
            class="px-2 py-1 rounded-full border text-sm font-bold capitalize"
            :class="getTypeClass(t.type.name)"
        >
            {{t.type.name }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { typeClasses } from '../types/types' 
defineProps<{
    types: { type: { name:string } }[]
}>()


const getTypeClass = (type: string) =>
    typeClasses[type] ?? 'bg-gray-300'

</script>