<template>
  <LayoutClient>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="flex items-center justify-center gap-3 mb-6">
          <FileText class="h-12 w-12 text-blue-600" />
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Terms of Service</h1>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          These terms govern your use of our AI-powered calling platform and services.
        </p>
        <div class="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Last updated: {{ lastUpdated }}
        </div>
      </div>

      <!-- Important Notice -->
      <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-8">
        <div class="flex items-start gap-3">
          <AlertTriangle class="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Notice</h3>
            <p class="text-amber-700 dark:text-amber-300 text-sm leading-relaxed">
              By using our service, you agree to these terms. Please read them carefully. 
              If you don't agree with these terms, please don't use our service.
            </p>
          </div>
        </div>
      </div>

      <!-- Table of Contents -->
      <div class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-sm p-6 mb-8">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <List class="h-5 w-5" />
          Table of Contents
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <a
            v-for="(section, index) in sections"
            :key="index"
            :href="`#section-${index + 1}`"
            class="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
          >
            <ChevronRight class="h-3 w-3" />
            {{ section.title }}
          </a>
        </div>
      </div>

      <!-- Content Sections -->
      <div class="space-y-8">
        <div
          v-for="(section, index) in sections"
          :key="index"
          :id="`section-${index + 1}`"
          class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-sm p-8"
        >
          <div class="flex items-start gap-4 mb-6">
            <div class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <span class="text-sm font-bold text-blue-600 dark:text-blue-400">{{ index + 1 }}</span>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ section.title }}</h2>
              <p class="text-gray-600 dark:text-gray-400">{{ section.description }}</p>
            </div>
          </div>

          <div class="prose prose-gray dark:prose-invert max-w-none">
            <div v-html="section.content"></div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 mt-12">
        <div class="text-center">
          <Scale class="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Questions About These Terms?</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            If you have any questions about these Terms of Service, please contact our legal team.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal@yourcompany.com"
              class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <Mail class="h-4 w-4" />
              legal@yourcompany.com
            </a>
            <a
              href="/contact"
              class="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <MessageCircle class="h-4 w-4" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </LayoutClient>
</template>

<script setup>
import { ref } from 'vue'
import {
  FileText,
  List,
  ChevronRight,
  AlertTriangle,
  Scale,
  Mail,
  MessageCircle,
} from 'lucide-vue-next'
import LayoutClient from '../LayoutClient.vue'

const lastUpdated = ref('January 29, 2025')

const sections = ref([
  {
    title: 'Acceptance of Terms',
    description: 'Your agreement to these terms and conditions',
    content: `
      <h3>Agreement to Terms</h3>
      <p>By accessing or using our AI-powered calling platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). These Terms apply to all users of the Service.</p>

      <h3>Eligibility</h3>
      <p>You must be at least 18 years old and have the legal capacity to enter into contracts to use our Service. By using the Service, you represent and warrant that you meet these requirements.</p>

      <h3>Business Use</h3>
      <p>Our Service is designed for business use. You represent that you are using the Service for legitimate business purposes and in compliance with all applicable laws and regulations.</p>

      <h3>Changes to Terms</h3>
      <p>We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Service. Your continued use after changes constitutes acceptance of the new Terms.</p>
    `
  },
  {
    title: 'Description of Service',
    description: 'What our platform provides and how it works',
    content: `
      <h3>AI Calling Platform</h3>
      <p>Our Service provides an AI-powered calling platform that enables businesses to:</p>
      <ul>
        <li>Make automated calls using artificial intelligence</li>
        <li>Monitor and manage call campaigns</li>
        <li>Analyze call performance and outcomes</li>
        <li>Integrate with existing business systems</li>
      </ul>

      <h3>Service Features</h3>
      <p>The Service includes, but is not limited to:</p>
      <ul>
        <li><strong>AI Voice Agents:</strong> Automated calling with natural language processing</li>
        <li><strong>Call Monitoring:</strong> Real-time call tracking and analytics</li>
        <li><strong>Campaign Management:</strong> Tools to create and manage calling campaigns</li>
        <li><strong>Integration APIs:</strong> Connect with your existing business tools</li>
        <li><strong>Reporting:</strong> Detailed analytics and performance reports</li>
      </ul>

      <h3>Service Availability</h3>
      <p>We strive to maintain 99.9% uptime, but we do not guarantee uninterrupted service. We may perform maintenance, updates, or experience technical issues that temporarily affect availability.</p>

      <h3>Beta Features</h3>
      <p>Some features may be offered in beta or preview mode. These features are provided "as is" and may be modified or discontinued at any time.</p>
    `
  },
  {
    title: 'User Accounts and Registration',
    description: 'Requirements for creating and maintaining your account',
    content: `
      <h3>Account Creation</h3>
      <p>To use the Service, you must create an account by providing accurate and complete information. You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your account credentials</li>
        <li>All activities that occur under your account</li>
        <li>Notifying us immediately of any unauthorized use</li>
        <li>Keeping your account information current and accurate</li>
      </ul>

      <h3>Account Security</h3>
      <p>You must:</p>
      <ul>
        <li>Use a strong, unique password</li>
        <li>Enable two-factor authentication when available</li>
        <li>Not share your account credentials with others</li>
        <li>Log out of shared or public computers</li>
      </ul>

      <h3>Account Suspension</h3>
      <p>We may suspend or terminate your account if you:</p>
      <ul>
        <li>Violate these Terms or our policies</li>
        <li>Engage in fraudulent or illegal activities</li>
        <li>Fail to pay applicable fees</li>
        <li>Pose a security risk to our Service or other users</li>
      </ul>

      <h3>Data Export</h3>
      <p>Before account termination, you may export your data using our provided tools. After termination, we may delete your data according to our retention policies.</p>
    `
  },
  {
    title: 'Acceptable Use Policy',
    description: 'Rules and restrictions for using our service',
    content: `
      <h3>Permitted Uses</h3>
      <p>You may use the Service for legitimate business purposes, including:</p>
      <ul>
        <li>Customer outreach and sales calls</li>
        <li>Customer support and service calls</li>
        <li>Appointment scheduling and reminders</li>
        <li>Market research and surveys (with proper consent)</li>
      </ul>

      <h3>Prohibited Uses</h3>
      <p>You may not use the Service to:</p>
      <ul>
        <li><strong>Illegal Activities:</strong> Violate any laws or regulations</li>
        <li><strong>Harassment:</strong> Make threatening, abusive, or harassing calls</li>
        <li><strong>Spam:</strong> Send unsolicited commercial communications</li>
        <li><strong>Fraud:</strong> Engage in deceptive or fraudulent practices</li>
        <li><strong>Privacy Violations:</strong> Call numbers on Do Not Call lists without proper exemptions</li>
        <li><strong>System Abuse:</strong> Attempt to hack, disrupt, or overload our systems</li>
      </ul>

      <h3>Compliance Requirements</h3>
      <p>You must comply with all applicable laws and regulations, including:</p>
      <ul>
        <li>Telephone Consumer Protection Act (TCPA)</li>
        <li>CAN-SPAM Act</li>
        <li>General Data Protection Regulation (GDPR)</li>
        <li>California Consumer Privacy Act (CCPA)</li>
        <li>Industry-specific regulations</li>
      </ul>

      <h3>Content Standards</h3>
      <p>All content used in calls must be:</p>
      <ul>
        <li>Truthful and not misleading</li>
        <li>Respectful and professional</li>
        <li>Compliant with advertising standards</li>
        <li>Free from offensive or inappropriate material</li>
      </ul>
    `
  },
  {
    title: 'Payment Terms',
    description: 'Billing, pricing, and payment policies',
    content: `
      <h3>Subscription Plans</h3>
      <p>Our Service is offered through various subscription plans with different features and usage limits. Current pricing is available on our website and may change with notice.</p>

      <h3>Billing and Payment</h3>
      <ul>
        <li><strong>Billing Cycle:</strong> Subscriptions are billed monthly or annually in advance</li>
        <li><strong>Payment Methods:</strong> We accept major credit cards and ACH transfers</li>
        <li><strong>Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled</li>
        <li><strong>Failed Payments:</strong> Service may be suspended for failed payments</li>
      </ul>

      <h3>Usage-Based Charges</h3>
      <p>Some features may incur additional charges based on usage:</p>
      <ul>
        <li>Per-minute calling charges</li>
        <li>Premium phone numbers</li>
        <li>Additional storage or bandwidth</li>
        <li>Third-party integrations</li>
      </ul>

      <h3>Refunds and Cancellations</h3>
      <ul>
        <li><strong>Cancellation:</strong> You may cancel your subscription at any time</li>
        <li><strong>Effective Date:</strong> Cancellations take effect at the end of the current billing period</li>
        <li><strong>Refunds:</strong> Generally no refunds for partial months, except as required by law</li>
        <li><strong>Disputes:</strong> Contact us within 30 days to dispute charges</li>
      </ul>

      <h3>Price Changes</h3>
      <p>We may change our pricing with 30 days' notice. Existing subscriptions will be grandfathered at current rates until renewal.</p>
    `
  },
  {
    title: 'Intellectual Property',
    description: 'Rights and ownership of content and technology',
    content: `
      <h3>Our Intellectual Property</h3>
      <p>The Service and all related technology, including but not limited to:</p>
      <ul>
        <li>Software, algorithms, and AI models</li>
        <li>User interface and design elements</li>
        <li>Trademarks, logos, and branding</li>
        <li>Documentation and training materials</li>
      </ul>
      <p>Are owned by us or our licensors and are protected by intellectual property laws.</p>

      <h3>Your Content</h3>
      <p>You retain ownership of content you upload or create using the Service, including:</p>
      <ul>
        <li>Call scripts and templates</li>
        <li>Contact lists and customer data</li>
        <li>Custom configurations and settings</li>
        <li>Reports and analytics data</li>
      </ul>

      <h3>License to Use Our Service</h3>
      <p>We grant you a limited, non-exclusive, non-transferable license to use the Service according to these Terms. This license does not include the right to:</p>
      <ul>
        <li>Reverse engineer or decompile our software</li>
        <li>Create derivative works based on our Service</li>
        <li>Resell or redistribute our Service</li>
        <li>Remove or modify our proprietary notices</li>
      </ul>

      <h3>License to Your Content</h3>
      <p>By using the Service, you grant us a limited license to use your content solely to provide the Service, including:</p>
      <ul>
        <li>Processing and storing your data</li>
        <li>Making calls on your behalf</li>
        <li>Providing analytics and reporting</li>
        <li>Improving our AI models (with anonymized data only)</li>
      </ul>

      <h3>DMCA Policy</h3>
      <p>We respect intellectual property rights and will respond to valid DMCA takedown notices. Contact us at legal@yourcompany.com for copyright concerns.</p>
    `
  },
  {
    title: 'Privacy and Data Protection',
    description: 'How we handle your data and protect your privacy',
    content: `
      <h3>Privacy Policy</h3>
      <p>Our Privacy Policy, incorporated by reference, explains how we collect, use, and protect your information. By using the Service, you consent to our privacy practices.</p>

      <h3>Data Processing</h3>
      <p>We process your data to provide the Service, including:</p>
      <ul>
        <li>Making calls and processing responses</li>
        <li>Storing call recordings and transcripts</li>
        <li>Analyzing call performance and outcomes</li>
        <li>Providing customer support</li>
      </ul>

      <h3>Data Security</h3>
      <p>We implement industry-standard security measures to protect your data:</p>
      <ul>
        <li>Encryption in transit and at rest</li>
        <li>Access controls and authentication</li>
        <li>Regular security audits and monitoring</li>
        <li>Incident response procedures</li>
      </ul>

      <h3>Data Retention</h3>
      <p>We retain your data according to our retention policies and legal requirements. You can request data deletion through your account settings or by contacting us.</p>

      <h3>International Transfers</h3>
      <p>Your data may be processed in countries other than your own. We ensure adequate protection through appropriate safeguards and legal mechanisms.</p>

      <h3>Your Rights</h3>
      <p>Depending on your location, you may have rights regarding your personal data, including access, correction, deletion, and portability. Contact us to exercise these rights.</p>
    `
  },
  {
    title: 'Disclaimers and Limitations',
    description: 'Important limitations on our liability and warranties',
    content: `
      <h3>Service Disclaimers</h3>
      <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:</p>
      <ul>
        <li>MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE</li>
        <li>NON-INFRINGEMENT OF THIRD-PARTY RIGHTS</li>
        <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
        <li>ACCURACY OR RELIABILITY OF RESULTS</li>
      </ul>

      <h3>AI Technology Limitations</h3>
      <p>Our AI technology, while advanced, has limitations:</p>
      <ul>
        <li>May not understand all accents or speech patterns</li>
        <li>Could misinterpret complex or ambiguous requests</li>
        <li>May generate unexpected or inappropriate responses</li>
        <li>Requires human oversight for optimal performance</li>
      </ul>

      <h3>Third-Party Services</h3>
      <p>We integrate with third-party services and are not responsible for:</p>
      <ul>
        <li>Availability or performance of third-party services</li>
        <li>Changes to third-party APIs or policies</li>
        <li>Data security practices of third parties</li>
        <li>Costs associated with third-party services</li>
      </ul>

      <h3>Limitation of Liability</h3>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY IS LIMITED TO THE AMOUNT YOU PAID FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM. WE ARE NOT LIABLE FOR:</p>
      <ul>
        <li>INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES</li>
        <li>LOST PROFITS, DATA, OR BUSINESS OPPORTUNITIES</li>
        <li>DAMAGES RESULTING FROM THIRD-PARTY ACTIONS</li>
        <li>DAMAGES EXCEEDING THE LIMITATION ABOVE</li>
      </ul>
    `
  },
  {
    title: 'Indemnification',
    description: 'Your responsibility to protect us from certain claims',
    content: `
      <h3>Your Indemnification Obligations</h3>
      <p>You agree to indemnify, defend, and hold us harmless from any claims, damages, losses, or expenses arising from:</p>
      <ul>
        <li>Your use of the Service in violation of these Terms</li>
        <li>Your violation of applicable laws or regulations</li>
        <li>Your content or data used with the Service</li>
        <li>Your infringement of third-party rights</li>
        <li>Your negligent or wrongful acts</li>
      </ul>

      <h3>Defense of Claims</h3>
      <p>We will notify you of any claims subject to indemnification and may, at our option:</p>
      <ul>
        <li>Allow you to control the defense and settlement</li>
        <li>Participate in the defense with counsel of our choice</li>
        <li>Require your consent for any settlement</li>
      </ul>

      <h3>Limitations</h3>
      <p>Your indemnification obligations are subject to:</p>
      <ul>
        <li>Prompt notice of claims from us</li>
        <li>Your right to control the defense</li>
        <li>Our cooperation in the defense</li>
        <li>Reasonable settlement terms</li>
      </ul>
    `
  },
  {
    title: 'Termination',
    description: 'How and when these terms may end',
    content: `
      <h3>Termination by You</h3>
      <p>You may terminate your account and these Terms at any time by:</p>
      <ul>
        <li>Cancelling your subscription through account settings</li>
        <li>Contacting our customer support</li>
        <li>Following the cancellation process in your account</li>
      </ul>

      <h3>Termination by Us</h3>
      <p>We may terminate your account and these Terms:</p>
      <ul>
        <li><strong>For Cause:</strong> Immediately for violations of these Terms</li>
        <li><strong>For Convenience:</strong> With 30 days' notice</li>
        <li><strong>Non-Payment:</strong> After reasonable notice and opportunity to cure</li>
        <li><strong>Legal Requirements:</strong> As required by law or regulation</li>
      </ul>

      <h3>Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul>
        <li>Your right to use the Service ends immediately</li>
        <li>We may delete your data according to our retention policy</li>
        <li>You remain liable for charges incurred before termination</li>
        <li>Provisions that should survive termination remain in effect</li>
      </ul>

      <h3>Data Export</h3>
      <p>Before termination, you should export any data you wish to retain. We provide tools for data export, but are not obligated to maintain your data after termination.</p>

      <h3>Surviving Provisions</h3>
      <p>The following provisions survive termination:</p>
      <ul>
        <li>Payment obligations</li>
        <li>Intellectual property rights</li>
        <li>Disclaimers and limitations of liability</li>
        <li>Indemnification obligations</li>
      </ul>
    `
  },
  {
    title: 'Dispute Resolution',
    description: 'How we handle disagreements and legal disputes',
    content: `
      <h3>Informal Resolution</h3>
      <p>Before pursuing formal dispute resolution, we encourage you to contact us at legal@yourcompany.com to resolve the issue informally.</p>

      <h3>Binding Arbitration</h3>
      <p>Any disputes arising from these Terms or the Service will be resolved through binding arbitration rather than in court, except for:</p>
      <ul>
        <li>Small claims court matters</li>
        <li>Intellectual property disputes</li>
        <li>Injunctive relief requests</li>
      </ul>

      <h3>Arbitration Rules</h3>
      <p>Arbitration will be conducted under the rules of the American Arbitration Association (AAA) with the following terms:</p>
      <ul>
        <li>Single arbitrator selected according to AAA rules</li>
        <li>Location in [Your State/Country]</li>
        <li>English language proceedings</li>
        <li>Applicable law of [Your Jurisdiction]</li>
      </ul>

      <h3>Class Action Waiver</h3>
      <p>You agree that disputes will be resolved individually and not as part of a class action, collective action, or representative proceeding.</p>

      <h3>Governing Law</h3>
      <p>These Terms are governed by the laws of [Your Jurisdiction], without regard to conflict of law principles.</p>

      <h3>Severability</h3>
      <p>If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.</p>
    `
  },
  {
    title: 'General Provisions',
    description: 'Additional terms and legal requirements',
    content: `
      <h3>Entire Agreement</h3>
      <p>These Terms, together with our Privacy Policy and any other referenced policies, constitute the entire agreement between you and us regarding the Service.</p>

      <h3>Modifications</h3>
      <p>We may modify these Terms at any time. Material changes will be communicated through email or the Service. Your continued use constitutes acceptance of the modified Terms.</p>

      <h3>Assignment</h3>
      <p>You may not assign these Terms or your account without our written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.</p>

      <h3>Force Majeure</h3>
      <p>We are not liable for delays or failures due to circumstances beyond our reasonable control, including natural disasters, government actions, or technical failures.</p>

      <h3>Notices</h3>
      <p>Legal notices will be sent to the email address associated with your account. You are responsible for keeping your contact information current.</p>

      <h3>Waiver</h3>
      <p>Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision.</p>

      <h3>Independent Contractors</h3>
      <p>The relationship between you and us is that of independent contractors. These Terms do not create a partnership, joint venture, or employment relationship.</p>

      <h3>Export Controls</h3>
      <p>The Service may be subject to export control laws. You agree to comply with all applicable export and import laws and regulations.</p>
    `
  }
])
</script>

<style scoped>
.prose h3 {
  @apply text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3;
}

.prose h4 {
  @apply text-base font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2;
}

.prose p {
  @apply text-gray-700 dark:text-gray-300 mb-4 leading-relaxed;
}

.prose ul {
  @apply space-y-2 mb-4;
}

.prose li {
  @apply text-gray-700 dark:text-gray-300 leading-relaxed;
}

.prose strong {
  @apply font-semibold text-gray-900 dark:text-white;
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.dark ::-webkit-scrollbar-thumb {
  background: #475569;
}
</style>