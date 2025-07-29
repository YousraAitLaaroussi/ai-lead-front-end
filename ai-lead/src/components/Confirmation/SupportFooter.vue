<template>
  <div class="text-center mt-8 pt-6 border-t border-gray-200">
    <p class="text-sm text-gray-600">
      Need help? 
      <button 
        @click="goToSupport"
        class="text-blue-600 hover:text-blue-500 font-medium focus:outline-none focus:underline ml-1"
      >
        Contact Support
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SupportFooter',
  methods: {
    goToSupport() {
      this.$router.push('/support')
    }
  }
}
</script>

<style scoped>
/* Support footer styles */
</style>
