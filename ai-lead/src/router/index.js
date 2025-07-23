import { createRouter, createWebHistory } from "vue-router";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
