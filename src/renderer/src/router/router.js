import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Config from '../components/Config.vue'
import ApiConfig from '../components/ApiConfig.vue'
import EditPad from '../components/EditPad.vue'

const routes = [
  {
    path: '/',
    redirect: '/editPad'
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
    name: 'about', // 名称改为唯一
    component: About,
    meta: {
      requiresAuth: false,
      title: '关于我们'
    }
  },
  {
    path: '/apiConfig',
    name: 'apiConfig', // 名称改为唯一
    component: ApiConfig,
    meta: {
      requiresAuth: false,
      title: '关于我们'
    }
  },
  {
    path: '/editPad',
    name: 'editPad', // 名称改为唯一
    component: EditPad,
    meta: {
      requiresAuth: false,
      title: '关于我们'
    }
  },
  {
    path: '/config',
    name: 'config', // 名称改为唯一
    component: Config,
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
