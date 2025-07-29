<template>
  <div class="space-y-3">
    <button
      @click="$emit('track-order')"
      class="w-full flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
    >
      <PackageIcon class="h-4 w-4 mr-2" />
      Track Your Order
    </button>
    
    <button
      @click="$emit('continue-shopping')"
      class="w-full flex justify-center items-center px-4 py-3 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
    >
      <HomeIcon class="h-4 w-4 mr-2" />
      Continue Shopping
    </button>
  </div>
</template>

<script>
import { PackageIcon, HomeIcon } from 'lucide-vue-next'

export default {
  name: 'ActionButtons',
  components: {
    PackageIcon,
    HomeIcon
  },
  emits: ['track-order', 'continue-shopping']
}
</script>

<style scoped>
button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}
</style>
