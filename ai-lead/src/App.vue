<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Index from './pages/Index.vue';
import pricing from './pages/pricing.vue';
import ClientDashboard from './pages/ClientDashboard.vue'
</script>

<template>
   <!-- <Index ></Index> -->
    <!-- <pricing ></pricing> -->
    <!-- <ClientDashboard ></ClientDashboard> -->
<router-view />
    
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
