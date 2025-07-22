<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <h1 class="text-4xl font-bold text-red-600 p-4 border-4 border-blue-500 rounded-lg">
    Hello Tailwind!
  </h1>
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
