const state = {
  onboardingPhase: 0,
  interests: [
    {
      name: "skiing",
      state: 0
    },
    {
      name: "sleeping",
      state: 0
    },
    {
      name: "movies",
      state: 0
    },
    {
      name: "series",
      state: 0
    },
    {
      name: "cooking",
      state: 0
    },
    {
      name: "dancing",
      state: 0
    },
    {
      name: "eating",
      state: 0
    },
    {
      name: "going out",
      state: 0
    },
    {
      name: "fashion",
      state: 0
    },
    {
      name: "soccer",
      state: 0
    },
    {
      name: "fucking",
      state: 0
    }
  ],
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
  ]
}

const getters = {
  getOnboardingPhase: () => state.onboardingPhase,
  getInterests: () => state.interests,
  getYoBusiness: () => state.yoBusiness
}

const actions = {
  changePhase({commit}) {
    commit("nextPhase")
  }
}

const mutations = {
  nextPhase(state) {
    state.onboardingPhase ++
  }
}

module.exports = {
  state,
  getters,
  actions,
  mutations
}