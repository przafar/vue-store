import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Women from '../views/Women.vue'
import Add from '../views/Add.vue'
import Store from '../views/store.vue'
import Admin from '../views/Admin.vue'
import ProductEdit from '../assets/ProductEdit.vue'
import ProductCreate from '../assets/ProductCreate.vue'



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
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/ProductEdit/:id',
    name: 'ProductEdit',
    component: ProductEdit,
  },
  {
    path: '/ProductCreate',
    name: 'ProductCreate',
    component: ProductCreate,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
