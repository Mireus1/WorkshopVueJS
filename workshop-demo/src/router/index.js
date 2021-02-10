import Vue from 'vue'
import VueRouter from 'vue-router'
import Dogs from '../views/Dogs.vue'
import Cats from '../views/Cats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
]

const router = new VueRouter({
  routes
})

export default router
