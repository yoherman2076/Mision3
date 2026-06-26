<template>
    <div 
        class="bg-red-200 border border-red-400 text-red-700 px-4 py-3 rounded text-center"
    >
        {{ message }}
    </div>
</template>

<script setup lang="ts">
defineProps<{
    message: string
}>()

</script>