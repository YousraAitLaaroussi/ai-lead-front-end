<template>
  <LayoutClient>
    <!-- Header -->
    <div class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <button 
              @click="goBack"
              class="inline-flex items-center p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <div>
              <h1 class="text-xl font-semibold text-gray-900">Lead Details</h1>
              <p class="text-sm text-gray-500">Manage and track lead information</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-3">
            <button 
              @click="editLead"
              class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
              Edit Lead
            </button>
            <button 
              @click="deleteLead"
              class="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
    
    <!-- Lead Information Cards -->
    <div class="col-span-3 p-4">
      
      <!-- Lead Header -->
      <AppHeader :lead="lead" />

      <!-- Contact Information -->
      <ContactInformation :lead="lead" />

      <!-- Call History -->
      <CallHistory :calls="callHistory" />

    </div>

    <!-- Activity & Notes Sidebar -->
    <div class="space-y-6">
      
      <!-- Notes -->
      <NotesCard 
        :notes="lead.notes"
        @add-note="handleAddNote"
      />

      <!-- Activity Timeline -->
      <ActivityTimeline :activities="activities" />

      <!-- Quick Actions -->
      <QuickActions 
        @send-email="handleSendEmail"
        @schedule-call="handleScheduleCall"
        @add-task="handleAddTask"
      />

    </div>
  </div>
</div>

  </LayoutClient>
</template>

<script setup>
import { ref } from 'vue'

import ContactInformation from '@/components/Lead/ContactInformation.vue'
import CallHistory from '@/components/Lead/CallHistory.vue'
import NotesCard from '@/components/Lead/NotesCard.vue'
import ActivityTimeline from '@/components/Lead/ActivityTimeline.vue'
import QuickActions from '@/components/Lead/QuickActions.vue'
import LayoutClient from '../../layout/LayoutClient.vue'

// Mock lead data
const lead = ref({
  id: 1,
  name: 'Alice Johnson',
  email: 'alice.johnson@techcorp.com',
  phone: '+1 (555) 123-4567',
  company: 'Tech Corp Solutions',
  status: 'Qualified',
  source: 'Website Contact Form',
  createdDate: '2024-03-15',
  lastContact: '2024-03-20',
  assignedTo: 'John Doe',
  score: 85,
  notes: 'Highly interested in our enterprise solution. Has budget approved and decision-making authority. Prefers email communication and is available for calls on weekdays after 2 PM EST.'
})

// Call history data
const callHistory = ref([
  {
    id: 1,
    type: 'outgoing',
    date: '2024-03-20T14:30:00Z',
    duration: '12:45',
    intents: [
      { name: 'Purchase Intent', confidence: 0.92 },
      { name: 'Price Inquiry', confidence: 0.87 },
      { name: 'Feature Request', confidence: 0.73 },
      { name: 'Timeline Discussion', confidence: 0.65 }
    ],
    transcript: [
      { speaker: 'Agent', timestamp: '00:00', text: 'Hi Alice, thank you for taking the time to speak with me today. I understand you\'re interested in our enterprise solution?' },
      { speaker: 'Customer', timestamp: '00:08', text: 'Yes, that\'s right. We\'ve been looking for a comprehensive solution that can handle our growing needs. Can you tell me more about the pricing structure?' },
      { speaker: 'Agent', timestamp: '00:18', text: 'Our enterprise package starts at $299 per month and includes all premium features, 24/7 support, and custom integrations. What specific features are most important to your team?' },
      { speaker: 'Customer', timestamp: '00:32', text: 'We really need the API integration capabilities and the advanced analytics dashboard. How quickly can we get this implemented?' },
      { speaker: 'Agent', timestamp: '00:42', text: 'Great questions! The API integration is included in the enterprise package, and our typical implementation timeline is 2-3 weeks. I can schedule a technical demo for next week if you\'d like?' },
      { speaker: 'Customer', timestamp: '00:55', text: 'That sounds perfect. Yes, let\'s schedule that demo. I\'ll need to involve our technical team as well.' }
    ]
  },
  {
    id: 2,
    type: 'incoming',
    date: '2024-03-18T10:15:00Z',
    duration: '8:32',
    intents: [
      { name: 'Information Request', confidence: 0.89 },
      { name: 'Comparison Shopping', confidence: 0.76 },
      { name: 'Budget Discussion', confidence: 0.68 }
    ],
    transcript: [
      { speaker: 'Customer', timestamp: '00:00', text: 'Hi, I saw your website and I\'m interested in learning more about your services. Can you help me understand how you compare to your competitors?' },
      { speaker: 'Agent', timestamp: '00:08', text: 'Of course! I\'d be happy to help. What specific areas are you most concerned about when comparing solutions?' },
      { speaker: 'Customer', timestamp: '00:15', text: 'Mainly pricing and the level of support we\'d receive. We\'re a growing company and need something that can scale with us.' },
      { speaker: 'Agent', timestamp: '00:25', text: 'That makes perfect sense. Our solution is designed specifically for growing businesses. We offer flexible pricing tiers and our support team is available 24/7. Would you like me to send you a detailed comparison sheet?' }
    ]
  }
])

// Mock activity data
const activities = ref([
  {
    type: 'call',
    action: 'Outbound call completed',
    description: 'Discovery call - discussed enterprise features and pricing (12:45)',
    date: '2 hours ago'
  },
  {
    type: 'email',
    action: 'Email sent',
    description: 'Sent follow-up email with pricing proposal and implementation timeline',
    date: '1 day ago'
  },
  {
    type: 'note',
    action: 'Note added',
    description: 'Lead expressed strong interest in premium features and enterprise support',
    date: '2 days ago'
  }
])

// Methods
const goBack = () => {
  console.log('Navigate back to leads list')
}

const editLead = () => {
  console.log('Edit lead:', lead.value.id)
}

const deleteLead = () => {
  if (confirm(`Are you sure you want to delete ${lead.value.name}?`)) {
    console.log('Delete lead:', lead.value.id)
  }
}

const handleAddNote = () => {
  console.log('Add note')
}

const handleSendEmail = () => {
  console.log('Send email')
}

const handleScheduleCall = () => {
  console.log('Schedule call')
}

const handleAddTask = () => {
  console.log('Add task')
}
</script>