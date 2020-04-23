const _ = require("../../services/utils")

const onboardingAxios = require("../../services/onboarding.axios")
const mainAxios = require("../../services/main.axios")

const state = {
  onboardingPhase: 0,
  interests: [],
  businesses: [],
  yoBusiness: [
    {
      name: "Friendship",
      icon: "",
      state: false,
      no: 0
    },
    {
      name: "FWB",
      state: false,
      no: 1
    },
    {
      name: "Networking",
      state: false,
      no: 2
    },
    {
      name: "Hookup",
      state: false,
      no: 3
    },
    {
      name: "Something serious",
      state: false,
      no: 4
    },
    {
      name: "Other",
      state: false,
      no: 5
    },
  ],
  otp: "",
  otpResponse: "",
  phone: "",
  createUserResponse: "",
  saveInterestsResponse: "",
  userInfo: {
    bio: "",
    job: ""
  }
}

const getters = {
  getOnboardingPhase: () => state.onboardingPhase,
  getInterests: () => state.interests,
  getBusinesses: () => state.businesses,
  getYoBusiness: () => state.yoBusiness,
  getOTPResponse: () => state.otpResponse,
  getCreateUserResponse: () => state.createUserResponse,
  getSaveInterestsResponse: () => state.saveInterestsResponse,
  getOTP: () => state.otp,
  getPhone: () => state.phone
}

const actions = {
  changePhase({commit}, direction) {
    if (direction === "next") commit("nextPhase")
    if (direction === "prev") commit("prevPhase")
  },
  makeOTPRequest({commit}, phone) {
    return new Promise((resolve, reject) => {
      onboardingAxios.post("/user-management/v1/get-otp", { phone })
      .then(res => {
        if (res.status == 200) {
          const user = {
            phone,
            otp: res.data.otp
          }
          _.storage.save("userDetails", _.encodeJSON(user))
          commit("setOTP", res.data.otp)
          resolve(res.data.otp)
        } else {
          commit("setOTPResponse", "Failed. Try again")
          resolve("fail")
        }
      })
      .catch(err => {
        commit("setOTPResponse", err.message)
        reject("fail", err)
      })
    })
  },
  makeUserDetailsRequest({commit}, userDetails) {
    return new Promise((resolve, reject) => {
      onboardingAxios.post("/user-management/v1/create-user", userDetails)
      .then(res => {
        if (res.status == 200) {
          if (res.data.message.status == "00") {
            console.log(res.data.id)
            userDetails.id = res.data.id
            commit("setCreateUserResponse", "User created successfully")
            _.storage.save("userDetails", _.encodeJSON(userDetails))
            commit("setCreateUserResponse", res.data.otp)
            resolve("pass")
          }
          commit("setCreateUserResponse", res.data.message.message)
          resolve("fail")
        } else {
          commit("setCreateUserResponse", "Failed. Try again")
          resolve("fail")
        }
      })
      .catch(err => {
        commit("setCreateUserResponse", err.message)
        reject("fail")
      })
    })
  },
  fetchYoBusiness({commit}) {
    return new Promise((resolve, reject) => {
      const token = _.decodeJSON(_.storage.get("token"))
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`
      }
      mainAxios.get("/yobusiness/v1/fetch-business", { headers })
      .then(res => {
        if (res.status == 200) {
          commit("setYoBusiness", res.data)
          // _.storage.save("userDetails", _.encodeJSON(userInterests))
          resolve(res.data)
        } else {
          commit("setYoBusinessResponse", "Failed. Try again")
          resolve("fail")
        }
      })
      .catch(err => {
        commit("setUserInterestsResponse", err.message)
        reject("fail")
      })
    })
  },
  fetchAllInterests({commit}) {
    return new Promise((resolve, reject) => {
      const token = _.decodeJSON(_.storage.get("token"))
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`
      }
      mainAxios.get("/interest/v1/fetch-interest", { headers })
      .then(res => {
        if (res.status == 200) {
          commit("setInterests", res.data)
          // _.storage.save("userDetails", _.encodeJSON(userInterests))
          resolve(res.data)
        } else {
          commit("setUserInterestsResponse", "Failed. Try again")
          resolve("fail")
        }
      })
      .catch(err => {
        commit("setUserInterestsResponse", err.message)
        reject("fail")
      })
    })
  },
  submitUserInterestsRequest({commit}, userInterests) {
    return new Promise((resolve, reject) => {
      userInterests.bio = state.userInfo.bio
      userInterests.job = state.userInfo.job
      const token = _.decodeJSON(_.storage.get("token"))
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`
      }

      console.log(userInterests)
      mainAxios.post("/interest/v1/save-interests", userInterests, { headers })
      .then(res => {
        if (res.status == 200) {
          console.log(res.data)
          
          resolve("Saved")
        } else {
          commit("setUserInterestsResponse", "Failed. Try again")
          resolve("fail")
        }
      })
      .catch(err => {
        commit("setUserInterestsResponse", err.message)
        reject("fail")
      })
    })
  },
  submitYoBusinessRequest({commit}, yoBusiness) {
    return new Promise((resolve, reject) => {
      const token = _.decodeJSON(_.storage.get("token"))
      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`
      }
      mainAxios.post("/yobusiness/v1/save-user-business", yoBusiness, { headers })
      .then(res => {
        if (res.status == 200) {
          console.log(res.data)
          
          resolve("Saved")
        } else {
          commit("setUserInterestsResponse", "Failed. Try again")
          resolve("fail")
        }
      })
      .catch(err => {
        commit("setUserInterestsResponse", err.message)
        reject("fail")
      })
    })
  },
  submitUserInfo({commit}, userInfo) {
    commit("setUserInfo", userInfo)
  }
}

const mutations = {
  nextPhase(state) {
    state.onboardingPhase ++
  },
  prevPhase(state) {
    state.onboardingPhase --
  },
  setOTPResponse(state, response) {
    state.otpResponse = response
  },
  setCreateUserResponse(state, response) {
    state.otpResponse = response
  },
  setUserInterestsResponse(state, response) {
    state.saveInterestsResponse = response
  },
  setOTP(state, response) {
    state.otp = response
  },
  setPhone(state, phone) {
    state.phone = phone
  },
  setInterests(state, interests) {
    interests.forEach(interest => {
      interest.state = false
      state.interests.push(interest)
    })
  },
  setYoBusiness(state, businesses) {
    businesses.forEach(business => {
      business.state = false
      state.businesses.push(business)
    })
  },
  setUserInfo(state, userInfo) {
    state.userInfo.bio = userInfo.bio
    state.userInfo.job = userInfo.job
  },
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}