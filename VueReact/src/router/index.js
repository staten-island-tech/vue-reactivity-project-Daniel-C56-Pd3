import { createRouter, createWebHistory } from 'vue-router'
import PizzaCreator from '@/Vues/Pizzacreator.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PizzaCreator
    }
  ],
})

export default router
