import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cats',
    name: 'Cats',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cats.vue')
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dogs.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import(/* webpackChunkName: "about" */ '../views/Other.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
