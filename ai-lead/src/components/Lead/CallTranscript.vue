<template>
  <div class="bg-gray-50 rounded-lg p-4">
    <div class="flex items-center justify-between mb-3">
      <h4 class="text-sm font-medium text-gray-900 flex items-center">
        <svg class="w-4 h-4 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        Call Transcript
      </h4>
      <button 
        @click="$emit('export')"
        class="text-xs text-blue-600 hover:text-blue-800 font-medium"
      >
        Export
      </button>
    </div>
    
    <div class="max-h-64 overflow-y-auto space-y-3">
      <div 
        v-for="(segment, index) in transcript" 
        :key="index"
        class="flex space-x-3"
      >
        <div class="flex-shrink-0">
          <div 
            :class="[
              'w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium',
              segment.speaker === 'Agent' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
            ]"
          >
            {{ segment.speaker.charAt(0) }}
          </div>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center space-x-2 mb-1">
            <p class="text-xs font-medium text-gray-900">{{ segment.speaker }}</p>
            <p class="text-xs text-gray-500">{{ segment.timestamp }}</p>
          </div>
          <p class="text-sm text-gray-700 leading-relaxed">{{ segment.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  transcript: {
    type: Array,
    required: true
  }
})

defineEmits(['export'])
</script>