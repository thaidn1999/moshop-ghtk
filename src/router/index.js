import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import DashBoard from '../views/DashBoard.vue'
import PageNotFound from "../views/PageNotFound.vue"
import CreateStaff from '../views/CreateStaff.vue'
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
      path: '/home',
      name: 'dashboard',
      component: DashBoard,
    },
    {
      path: '/create',
      name: "create",
      component: CreateStaff,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'page-not-found',
      component: PageNotFound
    }
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
      path: '/home',
      replace: true
    })
  } else {
    next();
  }
})
export default router
