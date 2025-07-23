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
