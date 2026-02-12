import { createRouter, createWebHistory } from 'vue-router'
import SmoothieHome from '@/Views/SmoothieHome.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SmoothieHome
    }
  ],
})


export default router


