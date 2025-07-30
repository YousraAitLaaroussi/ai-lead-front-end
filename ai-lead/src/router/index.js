import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Plans from '../pages/Plans.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Index.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../pages/ClientDashboard.vue'),
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../pages/pricing.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/auth/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/auth/RegisterPage.vue'),
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans,
    meta: {
      title: 'Choose Your Plan',
    },
  },
  {
    path: '/paiment',
    name: 'Paiment',
    component: () => import('@/pages/CheckotPaiment.vue'),
  },
 
 {
    path: "/checkoutConfirmation",
    name: "CheckoutConfirmation",
    component: ()=> import('@/pages/CheckoutConfirmationPage.vue'),
  },
  {
   path: "/leads",
    name: "Leadlist",
    component: () => import("@/pages/Client/LeadsPage.vue"),
  },
   {
    path: "/call-logs",
    name: "call-logs",
    component: () => import("@/pages/Client/call-logs.vue"),
  },
  {
   path: "/leads/details",
    name: "LeadDetails",
    component: () => import("@/pages/Client/LeadDetailPage.vue"),
  },
   {
    path: "/Client/ai-intents",
    name: "ai-intents",
    component: () => import("@/pages/Client/ai-intents.vue"),
  },
   {
    path: "/Client/billing",
    name: "billing",
    component: () => import("@/pages/Client/billing-plan.vue"),
  },

  {
   path: "/campaigne",
    name: "campaigne",
    component: () => import("@/pages/Client/Campaigns.vue"),
  },

   {
   path: "/support",
    name: "support",
    component: () => import("@/pages/Client/SupportPage.vue"),
  },

  {
   path: "/clientmanagment",
    name: "client",
    component: () => import("@/pages/Admin/ClientManagment.vue"),
  }, 
  {
   path: "/CallMonitor",
    name: "call",
    component: () => import("@/pages/Admin/CallMonitor.vue"),
  },
   {
   path: "/admin/dashboard",
    name: "AdminDashboard",
    component: () => import("@/pages/Admin/AdminDashboard.vue"),
  },
  {
   path: "/Terms",
    name: "terms",
    component: () => import("@/layout/PT/TermsOfService.vue"),
  },

   {
   path: "/privacy",
    name: "privacy",
    component: () => import("@/layout/PT/PrivacyPolicy.vue"),
  },
    {
   path: "/prfsetting",
    name: "setting",
    component: () => import("@/pages/Client/ProfileSettings.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Set page title dynamically
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
