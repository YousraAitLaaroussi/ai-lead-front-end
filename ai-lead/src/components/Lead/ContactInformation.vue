<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden pb-2">
    <div class="px-6 py-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-6">Contact Information</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-500">Email Address</p>
            <p class="text-sm text-gray-900 truncate">{{ lead.email }}</p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-500">Phone Number</p>
            <p class="text-sm text-gray-900">{{ lead.phone }}</p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg class="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-500">Company</p>
            <p class="text-sm text-gray-900">{{ lead.company }}</p>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg class="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-500">Lead Source</p>
            <p class="text-sm text-gray-900">{{ lead.source }}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  lead: {
    type: Object,
    required: true
  }
})
</script>