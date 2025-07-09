import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: false,
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'about',  // 名称改为唯一
    component: About,
    meta: {
      requiresAuth: false,
      title: '关于我们'
    }
  },
  {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('../components/NotFound.vue')
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router