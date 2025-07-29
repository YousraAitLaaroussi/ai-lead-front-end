<template>
  <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
    <div class="flex items-start">
      <MailIcon class="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
      <div class="text-sm">
        <p class="text-blue-800 font-medium">Confirmation email sent</p>
        <p class="text-blue-700 mt-1">
          We've sent a confirmation email to <span class="font-medium">{{ email }}</span> 
          with your order details and tracking information.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon } from 'lucide-vue-next'

export default {
  name: 'EmailNotification',
  components: {
    MailIcon
  },
  props: {
    email: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
/* Email notification styles */
</style>
