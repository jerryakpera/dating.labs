<template>
  <div class="bg">
    <div class="splashBox">
      <h1>
        <span class="word word1">
          love . 
        </span>
        <span class="word word2">
          work 
        </span>
        <span class="word word3">
          . play 
        </span> 
      </h1>
      <button 
        class="borderBtn blue"
        v-b-modal.modal-center
        id="toggle-btn"
        @click="toggleModal"
      >
        Login
      </button>
      <router-link to="/onboarding">
        <button class="borderBtn main">
          Join dating.labs
        </button>
      </router-link>
      <div>
        <b-modal size="sm" ref="loginModal" centered hide-footer title="Login">
          <Login />
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  components: {
    Login: () => import("@/components/onboarding/Login")
  },
  methods: {
    showModal() {
      this.$refs['loginModal'].show()
    },
    hideModal() {
      this.$refs['loginModal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['loginModal'].toggle('#toggle-btn')
    }
  }
}
</script>

<style lang="scss">
@import "../scss/custom.scss";
@import "../scss/onboarding/welcome.scss";


/* Smartphones (portrait and landscape) ----------- */


</style>