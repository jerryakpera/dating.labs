const axios = require("axios")
const _ = require("../../services/utils")

const config = require("../../config/config")

const AXIOS = axios.create({
  baseURL: `${config.mainEndpoint}`,
  headers: {
    "Content-Type": "application/json"
  }
})

const state = {
  loggedIn: false,
  token: {},
  authenticateResponse: ""
}

const getters = {
  getLoggedIn: () => state.loggedIn
}

const actions = {
  authenticate({commit}, userDetails) {
    return new Promise((resolve, reject) => {
      const user = {
        email: userDetails.email,
        password: userDetails.password
      }
      AXIOS.post("/authenticate", user)
      .then(res => {
        if (res.status == 200) {
          if (res.data.message.status == "00") {
            const token = {
              accessToken: res.data.token,
              expiry: res.data.expiration
            }
            console.log("TOKEN: ", token.accessToken)    
            commit("login", token)
            _.storage.save("token", _.encodeJSON(token))
            resolve("pass")
          }
          commit("setAuthenticateResponse", res.data.message.message)
          resolve("fail")
        } else {
          commit("setAuthenticateResponse", "Failed. Try again")
          resolve("fail")
        }
      })
      .catch(err => {
        console.log(err)
        commit("setOTPResponse", err.message)
        reject(err)
      })
    })
  },
  logUserOut({commit}) {
    return new Promise((resolve) => {
      commit("logout")
      _.storage.remove("userDetails")
      _.storage.remove("token")
      resolve()      
    })
  },
  checkLoginStatus({commit}) {
    const userEncodedData = _.storage.get("token")

    if (userEncodedData) {
      commit("login")
    } else {
      commit("logout")
    }
  }
}

const mutations = {
  setAuthenticateResponse(state, response) {
    state.authenticateResponse = response
  },
  login(state, token) {
    state.token = token
    state.loggedIn = true
  },
  logout(state) {
    state.token = ""
    state.loggedIn = false
  },
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}