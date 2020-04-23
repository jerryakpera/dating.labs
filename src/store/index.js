import Vue from 'vue'
import Vuex from 'vuex'

import onboarding from "./modules/onboarding"
import auth from "./modules/auth"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    onboarding,
    auth
  }
})
