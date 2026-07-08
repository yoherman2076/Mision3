<template>
  <main class="min-h-screen bg-linear-to-br from-ter via-sec to-prim text-quin">

    <!-- Header -->
    <header class="container mx-auto px-6 pt-10">
      <h1
        class="mx-auto max-w-3xl rounded-full bg-sec py-5 text-center text-5xl font-extrabold shadow-xl backdrop-blur">
        Welcome to la Misión 4
      </h1>
    </header>

    <NavBar 
      v-if="!route.meta.hideNavbar"
      class="bg-sec my-4"
    />

    <RouterView v-slot="{ Component, route }">
      <Transition name="fade-slide" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>

  </main>
</template>


<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>