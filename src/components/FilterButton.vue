<template>
    <button class="secondary" @click="emits('setFilter', props.filter)">{{ props.filter }}</button>
</template>

<script setup lang="ts">
import type { TrainerFilter } from '../types/types';

const props = defineProps<{
    filter: TrainerFilter;
}>();

const emits = defineEmits<{
    setFilter: [filter: TrainerFilter]
}>();

</script>

