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
  path: '/checkout',
  name: 'Checkout',
  component: () => import('../pages/Checkout.vue'),
  meta: {
    title: 'Checkout',
  },
},
{
  path: '/confirmation',
  name: 'Confirmation',
  component: () => import('../pages/Confirmation.vue'),
  meta: {
    title: 'Confirmation',
  },
},
  {
   path: "/leads",
    name: "Leadlist",
    component: () => import("@/pages/Client/LeadsPage.vue"),
  },
  {
   path: "/leads/details",
    name: "LeadDetails",
    component: () => import("@/pages/Client/LeadDetailPage.vue"),
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
