import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Onboarding from '../views/Onboarding.vue'
import Welcome from '../views/Welcome.vue'
import Profile from '../views/Profile.vue'

import _ from "../services/utils"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
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
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (_.storage.get("token")) {
      next()
    } else {
      next('/welcome')
    }
  } else {
    next()
  }
})

export default router
