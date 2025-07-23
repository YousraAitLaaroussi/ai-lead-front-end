<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div class="px-6 py-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
      <div class="flow-root">
        <ul class="-mb-8">
          <li v-for="(activity, index) in activities" :key="index">
            <div class="relative pb-8" :class="{ 'pb-0': index === activities.length - 1 }">
              <span 
                v-if="index !== activities.length - 1"
                class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
              ></span>
              <div class="relative flex items-start space-x-3">
                <div class="relative">
                  <div 
                    :class="[
                      'h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white',
                      getActivityColor(activity.type)
                    ]"
                  >
                    <component :is="getActivityIcon(activity.type)" class="h-5 w-5 text-white" />
                  </div>
                </div>
                <div class="min-w-0 flex-1">
                  <div>
                    <div class="text-sm">
                      <span class="font-medium text-gray-900">{{ activity.action }}</span>
                    </div>
                    <p class="mt-0.5 text-xs text-gray-500">{{ activity.date }}</p>
                  </div>
                  <div class="mt-2 text-sm text-gray-700">
                    <p>{{ activity.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'

defineProps({
  activities: {
    type: Array,
    required: true
  }
})

const getActivityColor = (type) => {
  const colors = {
    'email': 'bg-blue-500',
    'call': 'bg-green-500',
    'note': 'bg-purple-500',
    'meeting': 'bg-orange-500'
  }
  return colors[type] || 'bg-gray-500'
}

const getActivityIcon = (type) => {
  const icons = {
    'email': () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, 
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })),
    'call': () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, 
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' })),
    'note': () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, 
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }))
  }
  return icons[type] || icons['note']
}
</script>