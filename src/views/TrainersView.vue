<template>
    <div class="flex flex-col-2 justify-center gap-6">
        <Form />
    
        <div class="h-122 max-h-110 overflow-y-auto scrollbar-none rounded-xl bg-slate-800/70 p-8 border-2 border-cuar shadow-2xl backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20">
              <TrainerList />
        </div>
    </div>

</template>

<script setup lang="ts">
import Form from "../components/TrainerForm.vue"
import TrainerList from "../components/TrainerList.vue"
</script>