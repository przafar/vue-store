import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Women from '../views/Women.vue'
import Add from '../views/Add.vue'
import Store from '../views/store.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Women',
    name: 'Women',
    component: Women
  },
  {
    path: '/Add/:id',
    name: 'Add',
    component: Add,
  },
  {
    path: '/store',
    name: 'Store',
    component: Store,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
