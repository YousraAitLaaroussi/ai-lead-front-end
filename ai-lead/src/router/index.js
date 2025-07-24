import { createRouter, createWebHistory } from 'vue-router'

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
    path: "/login",
    name: "Login",
    component: () => import("@/pages/auth/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/pages/auth/RegisterPage.vue"),
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
   path: "/campaigne",
    name: "campaigne",
    component: () => import("@/pages/Client/Campaigns.vue"),
  },

   {
   path: "/support",
    name: "support",
    component: () => import("@/pages/Client/SupportPage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
