import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Onboarding from '../views/Onboarding.vue'
import Welcome from '../views/Welcome.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: Onboarding
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
