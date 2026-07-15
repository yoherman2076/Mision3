<template>
    <div class="space-y-5 w-100">
        <TrainerCard 
            v-for="trainer in trainerStore.trainers"
            :key="trainer.id"
            :trainer="trainer"
        />
    </div>
</template>

<script setup lang="ts">
import { useTrainerStore } from '../stores/trainerStores.ts'
import TrainerCard from './TrainerCard.vue';

const trainerStore = useTrainerStore()
</script>