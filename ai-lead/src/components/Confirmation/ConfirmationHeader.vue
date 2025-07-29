<template>
  <div class="text-center mb-8">
    <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
      <CheckCircleIcon class="h-8 w-8 text-green-600" />
    </div>
    
    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      Order Confirmed!
    </h1>
    <p class="text-gray-600 mb-4">
      Thank you for your purchase. Your order has been successfully processed.
    </p>
    <p class="text-sm text-gray-500">
      Order #{{ orderNumber }}
    </p>
  </div>
</template>

<script>
import { CheckCircleIcon } from 'lucide-vue-next'

export default {
  name: 'ConfirmationHeader',
  components: {
    CheckCircleIcon
  },
  props: {
    orderNumber: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Component-specific animations */
.fade-in {
  animation: fadeIn 0.6s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
