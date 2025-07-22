// src/router/index.js
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
