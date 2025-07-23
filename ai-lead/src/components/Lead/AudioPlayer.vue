<template>
  <div class="bg-gray-50 rounded-lg p-4">
    <div class="flex items-center justify-between mb-3">
      <h4 class="text-sm font-medium text-gray-900">Call Recording</h4>
      <span class="text-xs text-gray-500">{{ duration }}</span>
    </div>
    
    <div class="flex items-center space-x-4">
      <button 
        @click="togglePlayback"
        :class="[
          'flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200',
          isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        ]"
      >
        <svg 
          v-if="!isPlaying"
          class="w-5 h-5 text-white ml-0.5" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z"/>
        </svg>
        <svg 
          v-else
          class="w-5 h-5 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      </button>
      
      <div class="flex-1">
        <div class="relative">
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div 
              class="bg-blue-600 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${progress}%` }"
            ></div>
          </div>
          <div class="flex justify-between text-xs text-gray-500 mt-1">
            <span>{{ formatTime(currentTime) }}</span>
            <span>{{ formatTime(totalTime) }}</span>
          </div>
        </div>
      </div>
      
      <div class="flex items-center space-x-2">
        <button class="p-1 text-gray-400 hover:text-gray-600">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6.343 6.343a9 9 0 000 12.728m2.829-9.9a5 5 0 000 7.072"></path>
          </svg>
        </button>
        <button 
          @click="$emit('download')"
          class="p-1 text-gray-400 hover:text-gray-600"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  duration: {
    type: String,
    required: true
  },
  callId: {
    type: [String, Number],
    required: true
  },
  currentTime: {
    type: Number,
    default: 0
  },
  totalTime: {
    type: Number,
    default: 765
  }
})

const emit = defineEmits(['play', 'pause', 'download'])

const isPlaying = ref(false)

const progress = computed(() => {
  return props.totalTime > 0 ? (props.currentTime / props.totalTime) * 100 : 0
})

const togglePlayback = () => {
  isPlaying.value = !isPlaying.value
  emit(isPlaying.value ? 'play' : 'pause', props.callId)
}

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}
</script>