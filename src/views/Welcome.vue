<template>
  <div class="bg">
    <div class="splashBox">
      <h1>
        <span class="word1">
          love | 
        </span>
        <span class="word2">
          work 
        </span>
        <span class="word3">
          | play 
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

.bg {
  margin: 0;
  padding: 0;
  background: $bgColor;
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: linear-gradient(rgba(204, 0, 255, 0.5), rgba(0, 0, 0, 0.3)), url("../assets/images/bg/bg2.jpg");
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
  background-position-x: center;
}

.splashBox {
  margin: 14% auto;
  padding: 10px;
  text-align: center;

  h1 {
    color: #FFF;
    font-family: $font-family-3;
    font-weight: bold;
    font-size: 7.5em;
    text-align: center;
    margin-bottom: 30px;

    .word1 {
      color: $mainColor;
    }

    .word3 {
      color: $info;
    }
  }

  h6 {
    color: #FFF;
    font-family: $font-family-1;
    margin: 30px 0 20px 0;

    span {
      font-size: 0.5em;
      font-weight: 100;
      display: block;
    }
  }
}

</style>