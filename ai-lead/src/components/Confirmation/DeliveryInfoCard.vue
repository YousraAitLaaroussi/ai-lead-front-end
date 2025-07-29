<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Delivery Information</h2>
    
    <div class="space-y-3">
      <div>
        <h3 class="font-medium text-gray-900 mb-2">Shipping Address</h3>
        <div class="text-sm text-gray-600 space-y-1">
          <p>{{ delivery.address.name }}</p>
          <p>{{ delivery.address.street }}</p>
          <p>{{ delivery.address.city }}, {{ delivery.address.state }} {{ delivery.address.zip }}</p>
        </div>
      </div>
      
      <div class="border-t border-gray-200 pt-3">
        <div class="flex items-center text-sm text-gray-600">
          <TruckIcon class="h-4 w-4 mr-2 text-blue-600" />
          <span>Estimated delivery: {{ delivery.estimatedDate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TruckIcon } from 'lucide-vue-next'

export default {
  name: 'DeliveryInfoCard',
  components: {
    TruckIcon
  },
  props: {
    delivery: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Delivery card styles */
</style>
