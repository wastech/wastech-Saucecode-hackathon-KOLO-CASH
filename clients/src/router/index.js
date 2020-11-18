import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import signUp from '../views/signUp.vue'
import login from '../views/login.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signUp
  },
  {
    path: '/about',
    name: 'About',
    component:About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
