<template>
    <img v-if="image" :src="image" alt="poKimon" >
</template>

<script setup lang="ts">
defineProps<{
    image: string
}>()


</script>