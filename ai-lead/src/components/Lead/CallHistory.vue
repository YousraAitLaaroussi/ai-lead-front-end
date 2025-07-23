<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mt-7">
    <div class="px-6 py-6">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-semibold text-gray-900 flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          Call History
        </h3>
        <span class="text-sm text-gray-500">{{ calls.length }} calls</span>
      </div>
      
      <div class="space-y-4">
        <div 
          v-for="call in calls" 
          :key="call.id"
          class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
        >
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-3">
              <div 
                :class="[
                  'h-8 w-8 rounded-full flex items-center justify-center',
                  call.type === 'incoming' ? 'bg-green-100' : 'bg-blue-100'
                ]"
              >
                <svg 
                  :class="[
                    'w-4 h-4',
                    call.type === 'incoming' ? 'text-green-600' : 'text-blue-600'
                  ]"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">
                  {{ call.type === 'incoming' ? 'Incoming Call' : 'Outgoing Call' }}
                </p>
                <p class="text-xs text-gray-500">{{ formatDateTime(call.date) }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-500">{{ call.duration }}</span>
              <button 
                @click="toggleCallDetails(call.id)"
                class="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {{ expandedCall === call.id ? 'Hide' : 'View' }} Details
              </button>
            </div>
          </div>

          <!-- Expanded Call Details -->
          <div v-if="expandedCall === call.id" class="mt-4 space-y-4">
            
            <!-- Audio Player -->
            <AudioPlayer 
              :duration="call.duration"
              :call-id="call.id"
              :current-time="getCurrentTime(call.id)"
              :total-time="getTotalTime(call.id)"
              @play="handlePlay"
              @pause="handlePause"
              @download="handleDownload"
            />

            <!-- Detected Intents -->
            <DetectedIntents :intents="call.intents" />

            <!-- Call Transcript -->
            <CallTranscript 
              :transcript="call.transcript"
              @export="handleExportTranscript"
            />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AudioPlayer from './AudioPlayer.vue'
import DetectedIntents from './DetectedIntents.vue'
import CallTranscript from './CallTranscript.vue'

defineProps({
  calls: {
    type: Array,
    required: true
  }
})

const expandedCall = ref(null)
const playbackProgress = ref({})

const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const toggleCallDetails = (callId) => {
  expandedCall.value = expandedCall.value === callId ? null : callId
}

const getCurrentTime = (callId) => {
  const progress = playbackProgress.value[callId]
  return progress ? progress.current : 0
}

const getTotalTime = (callId) => {
  const progress = playbackProgress.value[callId]
  return progress ? progress.total : 765
}

const handlePlay = (callId) => {
  console.log('Play call:', callId)
  if (!playbackProgress.value[callId]) {
    playbackProgress.value[callId] = { current: 0, total: 765 }
  }
}

const handlePause = (callId) => {
  console.log('Pause call:', callId)
}

const handleDownload = (callId) => {
  console.log('Download call:', callId)
}

const handleExportTranscript = (callId) => {
  console.log('Export transcript:', callId)
}
</script>