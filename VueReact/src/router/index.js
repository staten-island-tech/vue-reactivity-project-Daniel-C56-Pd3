import { createRouter, createWebHistory } from 'vue-router'
import SmoothieHome from '@/Views/SmoothieHome.vue'
import SmoothieCard from '@/Views/SmoothieCard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SmoothieHome
    },
    {
      path:'/',
      name:'card',
      component: SmoothieCard
    }
  ],
})


export default router


