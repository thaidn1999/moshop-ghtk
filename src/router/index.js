import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import DashBoard from '../views/dashboard/DashBoard.vue'

const token = localStorage.getItem('accessToken') || null;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (token) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard,
      beforeEnter: (to, from, next) => {
        if (token) {
          next();
        } else {
          next('/login');
        }
      }
    }
  ]
})
// router.beforeEach(async (to, from, next) => {
//   if (token && to.name !== 'login') {
//     next({ name: 'dashboard' })
//   }
//   else {
//     next()
//   }
// })
export default router
