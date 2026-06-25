<template>
    <div class="flex justify-center items-center gap-2">
        <span 
            v-for="t in types" 
            :key="t.type.name" 
            class="px-2 py-1 rounded-full text-sm font-bold capitalize"
            :class="getTypeClass(t.type.name)"
        >
            {{t.type.name }}
        </span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    types: { type: { name:string } }[]
}>()

const getTypeClass = (type: string) => {
    return {
        fire: 'bg-red-500 text-white',
        water: 'bg-blue-500 text-white',
        grass: 'bg-green-500 text-white',
    }[type] || 'bg-gray-300'
}

</script>