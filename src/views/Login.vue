<template>
  <div class="bg">
    <div class="centerBox">
      <h5>Welcome to dating.labs</h5>
      <h6>We'll find your match so you don't have to . . .</h6>
      <div>
        <b-form>
          <b-input-group
            size="lg"
            class="mb-3"
          >
            <b-input-group-prepend is-text>
              <b-icon icon="person" class="icon"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="text"
              placeholder="username / email"
              v-model="user.email"
            ></b-form-input> 
          </b-input-group>

          <b-input-group
            size="lg"
            class="mb-3"
          >
            <b-input-group-prepend is-text>
              <b-icon icon="unlock" class="icon"></b-icon>
            </b-input-group-prepend>
            <b-form-input
              type="password"
              v-model="user.password"
            ></b-form-input> 
          </b-input-group>

          <button
            type="button"
            class="loginButton"
            @click="logUserIn"
          >
            Login
          </button>
          <p class="textLink">
            Don't have an account? Sign up
          </p>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  methods: {
    logUserIn(e) {
      e.preventDefault()
      
      this.$router.push("/onboarding")
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
}

.centerBox {
  width: 350px;
  margin: 9% auto;
  padding: 10px;

  h5 {
    color: #FFF;
    font-family: $font-family-1;
  }

  h6 {
    color: #FFF;
    font-family: $font-family-1;
    margin: 30px 0 20px 0;
  }
}

.loginForm {
  width: 30%;
}

.loginInput {
  font-size: 0.8em;
  margin: 20px 0px;
  box-shadow: 0px 3px 3px $mainColor;
}

.icon {
  color: $mainColor;
}

.loginButton {
  padding: 10px 0;
  letter-spacing: 1px;
  background-color: $mainColor;
  text-transform: uppercase;
  width: 100%;
  border: 0;
  border-radius: 5px;
  font-weight: 600;
  color: #FFF;
}

.textLink {
  color: $mainColor;
  font-size: 0.8em;
  cursor: pointer;
  margin: 5px 0;
}

.descLink {
  color: #FFF;
  font-size: 0.8em;
}
</style>