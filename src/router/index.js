import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import DashBoard from '../views/dashboard/DashBoard.vue'
import PageNotFound from "../views/PageNotFound.vue"
import PersonalInfor from '../views/personalInfo/PersonalInfor.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard,

    },
    {
      path: '/views',
      name: 'views',
      component: PersonalInfor
    },
    {
      path: '/:pathMatch(.*)',
      name: 'page-not-found',
      component: PageNotFound
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('accessToken')) {
    next({
      path: '/login',
      replace: true
    })
  } else if (to.name === 'login' && localStorage.getItem('accessToken')) {
    next({
      path: '/',
      replace: true
    })
  } else {
    next();
  }
})
export default router
