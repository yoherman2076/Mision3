<template>
  <main
    class="min-h-screen bg-linear-to-br from-ter via-sec to-prim text-quin flex items-center justify-center"
  >
    <PageTransition>
        <RouterView v-slot="{ Component, route }">
         
            <component :is="Component" :key="route.path" />
        
        </RouterView>
    </PageTransition>
  </main>
</template>

<script setup lang="ts">
import PageTransition from '../components/PageTransition.vue';


</script>