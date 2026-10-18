import { createRouter, createWebHistory } from 'vue-router'
import RequestList from './pages/RequestList.vue'
import RequestNew from './pages/RequestNew.vue'
import Login from './pages/Login.vue'

const routes = [
  { path: '/', component: RequestList },
  { path: '/new', component: RequestNew },
  { path: '/login', component: Login }
]

export default createRouter({
  history: createWebHistory(),
  routes
})