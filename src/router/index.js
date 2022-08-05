import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import DashBoard from '../views/dashboard/DashBoard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard
    }
  ]
})

export default router
