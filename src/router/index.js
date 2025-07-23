import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue') // or don't render anything
  },
  {
    path: '/2fa',
    name: 'TwoFactor', 
    component: () => import('@/views/TwoFactor.vue')
  },
  {
    path: '/login', // Change from '/log' to '/login'
    name: 'Login',
    component: () => import('@/views/LoginPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
