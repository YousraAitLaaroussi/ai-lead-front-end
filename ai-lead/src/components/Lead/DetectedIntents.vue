<template>
  <div class="bg-blue-50 rounded-lg p-4">
    <h4 class="text-sm font-medium text-gray-900 mb-3 flex items-center">
      <svg class="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
      Detected Intents
    </h4>
    <div class="space-y-2">
      <div 
        v-for="intent in intents" 
        :key="intent.name"
        class="flex items-center justify-between"
      >
        <span class="text-sm text-gray-700">{{ intent.name }}</span>
        <div class="flex items-center space-x-2">
          <div class="w-16 bg-gray-200 rounded-full h-1.5">
            <div 
              :class="[
                'h-1.5 rounded-full',
                getConfidenceColor(intent.confidence)
              ]"
              :style="{ width: `${intent.confidence * 100}%` }"
            ></div>
          </div>
          <span class="text-xs text-gray-500">{{ Math.round(intent.confidence * 100) }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  intents: {
    type: Array,
    required: true
  }
})

const getConfidenceColor = (confidence) => {
  if (confidence >= 0.8) return 'bg-green-500'
  if (confidence >= 0.6) return 'bg-yellow-500'
  return 'bg-red-500'
}
</script>