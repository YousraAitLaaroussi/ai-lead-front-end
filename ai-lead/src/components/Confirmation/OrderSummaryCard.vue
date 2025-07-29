<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
    
    <div class="space-y-3">
      <div class="flex justify-between text-sm">
        <span class="text-gray-600">Order Number:</span>
        <span class="font-medium text-gray-900">#{{ order.orderNumber }}</span>
      </div>
      
      <div class="flex justify-between text-sm">
        <span class="text-gray-600">Order Date:</span>
        <span class="font-medium text-gray-900">{{ order.date }}</span>
      </div>
      
      <div class="border-t border-gray-200 pt-3">
        <div class="flex justify-between">
          <span class="text-base font-medium text-gray-900">Total Amount:</span>
          <span class="text-base font-bold text-gray-900">${{ formatPrice(order.total) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSummaryCard',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(price) {
      return price.toFixed(2)
    }
  }
}
</script>

<style scoped>
/* Card-specific styles */
</style>
