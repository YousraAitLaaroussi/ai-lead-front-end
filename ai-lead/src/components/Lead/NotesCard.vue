<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div class="px-6 py-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-900">Notes</h3>
        <button 
          @click="$emit('add-note')"
          class="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Add Note
        </button>
      </div>
      <div class="bg-gray-50 rounded-lg p-4">
        <p class="text-sm text-gray-700 leading-relaxed">
          {{ notes }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  notes: {
    type: String,
    required: true
  }
})

defineEmits(['add-note'])
</script>