<template>
  <div>
    <div>
      <Loading v-if="loading" variant="dark" />
      <div id="snackbar">{{snackbar.msg}}</div>
      <b-form v-if="!loading" @keydown.enter.prevent="logUserIn()">
        <b-input-group
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
          class="button flat main"
          @click="logUserIn"
        >
          Login
        </button>
        <p class="link main">
          Don't have an account? Sign up
        </p>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    loading: false,
    snackbar: {
      msg: "",
      color: ""
    },
  }),
  components: {
    Loading: () => import("@/components/universal/Loading")
  },
  methods: {
    logUserIn() {
      this.loading = true;

      const userDetails = {
        email: this.user.email,
        password: this.user.password
      };

      this.$store
      .dispatch("authenticate", userDetails)
      .then(() => {
        this.loading = false;
        this.$router.push("/")
      })
      .catch(err => {
        this.loading = false;
        console.log(err);
      });
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
@import "../../scss/custom.scss";
@import "../../scss/onboarding/login.scss";

</style>