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
    path: "/auth/login",
    name: "Login",
    component: () => import("@/pages/auth/LoginPage.vue"),
  },
  {
    path: "/auth/register",
    name: "Register",
    component: () => import("@/pages/auth/RegisterPage.vue"),
  },
  {
   path: "/leads",
    name: "Leadlist",
    component: () => import("@/pages/Client/LeadsPage.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
