<template>
  
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Success Icon -->
      <div class="text-center">
        <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <CheckCircleIcon class="h-8 w-8 text-green-600" />
        </div>
        
        <!-- Main Heading -->
        <h1 class="text-3xl font-bold text-gray-900 mb-2">
          Order Confirmed!
        </h1>
        <p class="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been successfully processed.
        </p>
      </div>

      <!-- Order Details Card -->
      <div class="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div class="border-b border-gray-200 pb-4">
          <h2 class="text-lg font-semibold text-gray-900 mb-3">Order Details</h2>
          <div class="space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Order Number:</span>
              <span class="font-medium text-gray-900">#{{ orderNumber }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Date:</span>
              <span class="font-medium text-gray-900">{{ orderDate }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Total Amount:</span>
              <span class="font-medium text-gray-900">${{ totalAmount }}</span>
            </div>
          </div>
        </div>

        <!-- Delivery Information -->
        <div class="space-y-2">
          <h3 class="font-medium text-gray-900">Delivery Information</h3>
          <div class="text-sm text-gray-600">
            <p>{{ deliveryAddress.name }}</p>
            <p>{{ deliveryAddress.street }}</p>
            <p>{{ deliveryAddress.city }}, {{ deliveryAddress.state }} {{ deliveryAddress.zip }}</p>
          </div>
          <div class="flex items-center text-sm text-gray-600 mt-2">
            <TruckIcon class="h-4 w-4 mr-2" />
            <span>Estimated delivery: {{ estimatedDelivery }}</span>
          </div>
        </div>
      </div>

      <!-- Email Confirmation Notice -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div class="flex items-start">
          <MailIcon class="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
          <div class="text-sm">
            <p class="text-blue-800 font-medium">Confirmation email sent</p>
            <p class="text-blue-700 mt-1">
              We've sent a confirmation email to {{ customerEmail }} with your order details and tracking information.
            </p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-3">
        <button
          @click="goToOrderTracking"
          class="w-full flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
        >
          <PackageIcon class="h-4 w-4 mr-2" />
          Track Your Order
        </button>
        
        <button
          @click="goHome"
          class="w-full flex justify-center items-center px-4 py-3 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
        >
          <HomeIcon class="h-4 w-4 mr-2" />
          Continue Shopping
        </button>
      </div>

      <!-- Support Link -->
      <div class="text-center">
        <p class="text-sm text-gray-600">
          Need help? 
          <button 
            @click="goToSupport"
            class="text-blue-600 hover:text-blue-500 font-medium focus:outline-none focus:underline"
          >
            Contact Support
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckCircleIcon, TruckIcon, MailIcon, PackageIcon, HomeIcon } from 'lucide-vue-next'

export default {
  name: 'CheckoutConfirmation',
  components: {
    CheckCircleIcon,
    TruckIcon,
    MailIcon,
    PackageIcon,
    HomeIcon
  },
  data() {
    return {
      orderNumber: 'ORD-2024-001234',
      orderDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      totalAmount: '149.99',
      customerEmail: 'customer@example.com',
      estimatedDelivery: '3-5 business days',
      deliveryAddress: {
        name: 'John Doe',
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zip: '10001'
      }
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goToOrderTracking() {
      this.$router.push(`/orders/${this.orderNumber}`)
    },
    goToSupport() {
      this.$router.push('/support')
    }
  },
  mounted() {
    // Auto-redirect to home after 30 seconds (optional)
    setTimeout(() => {
      // Uncomment the line below if you want auto-redirect
      // this.goHome()
    }, 30000)
  }
}
</script>

<style scoped>
/* Custom animations for enhanced user experience */
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

/* Hover effects for interactive elements */
button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}
</style>
