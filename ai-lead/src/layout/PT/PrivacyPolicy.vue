<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="flex items-center justify-center gap-3 mb-6">
          <Shield class="h-12 w-12 text-blue-600" />
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect your information.
        </p>
        <div class="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Last updated: {{ lastUpdated }}
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
          <Mail class="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Questions About Privacy?</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@yourcompany.com"
              class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <Mail class="h-4 w-4" />
              privacy@yourcompany.com
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
</template>

<script setup>
import { ref } from 'vue'
import {
  Shield,
  List,
  ChevronRight,
  Mail,
  MessageCircle,
} from 'lucide-vue-next'

const lastUpdated = ref('January 29, 2025')

const sections = ref([
  {
    title: 'Information We Collect',
    description: 'Types of personal and non-personal information we gather',
    content: `
      <h3>Personal Information</h3>
      <p>We collect information you provide directly to us, such as:</p>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, phone number, company details</li>
        <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely by our payment processors)</li>
        <li><strong>Communication Data:</strong> Messages, support tickets, and feedback you send to us</li>
        <li><strong>Call Data:</strong> Phone numbers, call recordings, transcripts, and metadata from your AI-powered calls</li>
      </ul>

      <h3>Automatically Collected Information</h3>
      <p>When you use our service, we automatically collect:</p>
      <ul>
        <li><strong>Usage Data:</strong> Features used, time spent, click patterns, and user interactions</li>
        <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
        <li><strong>Log Data:</strong> Server logs, error reports, and performance metrics</li>
        <li><strong>Cookies:</strong> Session cookies, preference cookies, and analytics cookies</li>
      </ul>

      <h3>Third-Party Information</h3>
      <p>We may receive information from:</p>
      <ul>
        <li>Integration partners and APIs you connect to our service</li>
        <li>Public databases and data enrichment services</li>
        <li>Social media platforms (if you choose to connect them)</li>
      </ul>
    `
  },
  {
    title: 'How We Use Your Information',
    description: 'The purposes for which we process your personal data',
    content: `
      <h3>Service Provision</h3>
      <ul>
        <li>Provide, maintain, and improve our AI calling platform</li>
        <li>Process transactions and manage your account</li>
        <li>Enable AI-powered call features and analytics</li>
        <li>Provide customer support and respond to inquiries</li>
      </ul>

      <h3>Communication</h3>
      <ul>
        <li>Send service-related notifications and updates</li>
        <li>Provide technical support and customer service</li>
        <li>Send marketing communications (with your consent)</li>
        <li>Conduct surveys and gather feedback</li>
      </ul>

      <h3>Analytics and Improvement</h3>
      <ul>
        <li>Analyze usage patterns to improve our service</li>
        <li>Develop new features and functionality</li>
        <li>Conduct research and analytics</li>
        <li>Monitor and analyze trends and usage</li>
      </ul>

      <h3>Legal and Security</h3>
      <ul>
        <li>Comply with legal obligations and regulations</li>
        <li>Protect against fraud, abuse, and security threats</li>
        <li>Enforce our terms of service and policies</li>
        <li>Resolve disputes and investigate violations</li>
      </ul>
    `
  },
  {
    title: 'Information Sharing',
    description: 'When and how we share your information with others',
    content: `
      <h3>We Do Not Sell Your Data</h3>
      <p>We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>

      <h3>Service Providers</h3>
      <p>We share information with trusted service providers who help us operate our business:</p>
      <ul>
        <li><strong>Cloud Infrastructure:</strong> AWS, Google Cloud, or similar providers</li>
        <li><strong>Payment Processing:</strong> Stripe, PayPal, or other payment processors</li>
        <li><strong>Analytics:</strong> Google Analytics, Mixpanel, or similar services</li>
        <li><strong>Communication:</strong> Email service providers, SMS gateways</li>
      </ul>

      <h3>Legal Requirements</h3>
      <p>We may disclose information when required by law or to:</p>
      <ul>
        <li>Comply with legal process, court orders, or government requests</li>
        <li>Protect our rights, property, or safety</li>
        <li>Investigate fraud or security issues</li>
        <li>Enforce our terms of service</li>
      </ul>

      <h3>Business Transfers</h3>
      <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>

      <h3>With Your Consent</h3>
      <p>We may share information for other purposes with your explicit consent.</p>
    `
  },
  {
    title: 'Data Security',
    description: 'How we protect your information from unauthorized access',
    content: `
      <h3>Security Measures</h3>
      <p>We implement industry-standard security measures to protect your data:</p>
      <ul>
        <li><strong>Encryption:</strong> Data encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
        <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
        <li><strong>Network Security:</strong> Firewalls, intrusion detection, and monitoring</li>
        <li><strong>Regular Audits:</strong> Security assessments and penetration testing</li>
      </ul>

      <h3>Data Centers</h3>
      <p>Our data is stored in secure, certified data centers with:</p>
      <ul>
        <li>24/7 physical security and monitoring</li>
        <li>Redundant power and network connections</li>
        <li>Environmental controls and disaster recovery</li>
        <li>SOC 2 Type II and ISO 27001 certifications</li>
      </ul>

      <h3>Employee Access</h3>
      <p>Access to personal data is limited to authorized employees who:</p>
      <ul>
        <li>Have a legitimate business need to access the data</li>
        <li>Are bound by confidentiality agreements</li>
        <li>Receive regular security training</li>
        <li>Use secure, monitored systems</li>
      </ul>

      <h3>Incident Response</h3>
      <p>In the event of a security incident, we will:</p>
      <ul>
        <li>Investigate and contain the incident promptly</li>
        <li>Notify affected users within 72 hours</li>
        <li>Cooperate with law enforcement if necessary</li>
        <li>Take steps to prevent future incidents</li>
      </ul>
    `
  },
  {
    title: 'Your Rights and Choices',
    description: 'How you can control your personal information',
    content: `
      <h3>Access and Portability</h3>
      <ul>
        <li><strong>Access:</strong> Request a copy of your personal data</li>
        <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
        <li><strong>Transparency:</strong> Understand how your data is processed</li>
      </ul>

      <h3>Correction and Updates</h3>
      <ul>
        <li>Update your account information at any time</li>
        <li>Correct inaccurate or incomplete data</li>
        <li>Request updates to outdated information</li>
      </ul>

      <h3>Deletion and Restriction</h3>
      <ul>
        <li><strong>Right to Delete:</strong> Request deletion of your personal data</li>
        <li><strong>Account Closure:</strong> Delete your account and associated data</li>
        <li><strong>Processing Restriction:</strong> Limit how we process your data</li>
      </ul>

      <h3>Marketing Communications</h3>
      <ul>
        <li>Opt out of marketing emails using unsubscribe links</li>
        <li>Manage communication preferences in your account settings</li>
        <li>Contact us to update your preferences</li>
      </ul>

      <h3>Cookies and Tracking</h3>
      <ul>
        <li>Manage cookie preferences in your browser settings</li>
        <li>Opt out of analytics tracking where available</li>
        <li>Use browser privacy features and extensions</li>
      </ul>

      <h3>How to Exercise Your Rights</h3>
      <p>To exercise any of these rights, contact us at <strong>privacy@yourcompany.com</strong> or through your account settings. We will respond within 30 days.</p>
    `
  },
  {
    title: 'Data Retention',
    description: 'How long we keep your information',
    content: `
      <h3>Retention Periods</h3>
      <p>We retain your information for different periods based on the type of data:</p>
      
      <h4>Account Data</h4>
      <ul>
        <li><strong>Active Accounts:</strong> Retained while your account is active</li>
        <li><strong>Closed Accounts:</strong> Deleted within 90 days of account closure</li>
        <li><strong>Backup Data:</strong> Removed from backups within 12 months</li>
      </ul>

      <h4>Call Data</h4>
      <ul>
        <li><strong>Call Recordings:</strong> Retained for 2 years or as configured in your settings</li>
        <li><strong>Call Metadata:</strong> Retained for 5 years for analytics and compliance</li>
        <li><strong>Transcripts:</strong> Retained according to your data retention settings</li>
      </ul>

      <h4>Usage and Analytics Data</h4>
      <ul>
        <li><strong>Usage Logs:</strong> Retained for 2 years</li>
        <li><strong>Analytics Data:</strong> Aggregated data retained indefinitely</li>
        <li><strong>Error Logs:</strong> Retained for 1 year</li>
      </ul>

      <h4>Legal and Compliance Data</h4>
      <ul>
        <li><strong>Financial Records:</strong> Retained for 7 years</li>
        <li><strong>Legal Documents:</strong> Retained as required by law</li>
        <li><strong>Compliance Records:</strong> Retained per regulatory requirements</li>
      </ul>

      <h3>Secure Deletion</h3>
      <p>When data is deleted, we use secure deletion methods to ensure it cannot be recovered.</p>
    `
  },
  {
    title: 'International Transfers',
    description: 'How we handle data across borders',
    content: `
      <h3>Global Operations</h3>
      <p>Our service operates globally, and your data may be transferred to and processed in countries other than your own.</p>

      <h3>Adequate Protection</h3>
      <p>When transferring data internationally, we ensure adequate protection through:</p>
      <ul>
        <li><strong>Adequacy Decisions:</strong> Transfers to countries with adequate data protection laws</li>
        <li><strong>Standard Contractual Clauses:</strong> EU-approved contracts for data transfers</li>
        <li><strong>Binding Corporate Rules:</strong> Internal policies ensuring consistent protection</li>
        <li><strong>Certification Programs:</strong> Privacy Shield successors and similar frameworks</li>
      </ul>

      <h3>Data Localization</h3>
      <p>Where required by law, we can store and process data within specific geographic regions.</p>

      <h3>Your Rights</h3>
      <p>Regardless of where your data is processed, you retain all rights under applicable privacy laws.</p>
    `
  },
  {
    title: 'Children\'s Privacy',
    description: 'Our policy regarding users under 18',
    content: `
      <h3>Age Restrictions</h3>
      <p>Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.</p>

      <h3>Parental Notice</h3>
      <p>If we become aware that we have collected personal information from a child under 18, we will:</p>
      <ul>
        <li>Delete the information immediately</li>
        <li>Notify the parent or guardian</li>
        <li>Terminate the account if applicable</li>
      </ul>

      <h3>Reporting</h3>
      <p>If you believe we have collected information from a child under 18, please contact us immediately at <strong>privacy@yourcompany.com</strong>.</p>
    `
  },
  {
    title: 'Changes to This Policy',
    description: 'How we handle updates to our privacy practices',
    content: `
      <h3>Policy Updates</h3>
      <p>We may update this Privacy Policy from time to time to reflect:</p>
      <ul>
        <li>Changes in our data practices</li>
        <li>New features or services</li>
        <li>Legal or regulatory requirements</li>
        <li>Industry best practices</li>
      </ul>

      <h3>Notification of Changes</h3>
      <p>When we make material changes, we will:</p>
      <ul>
        <li>Update the "Last Updated" date at the top of this policy</li>
        <li>Send email notifications to registered users</li>
        <li>Display prominent notices in our service</li>
        <li>Provide at least 30 days notice for significant changes</li>
      </ul>

      <h3>Continued Use</h3>
      <p>Your continued use of our service after changes become effective constitutes acceptance of the updated policy.</p>

      <h3>Version History</h3>
      <p>Previous versions of this policy are available upon request.</p>
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