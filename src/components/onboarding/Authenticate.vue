<template>
  <div class="mainBox">
    <Loading v-if="loading" variant="light" />
    <div id="snackbar">{{snackbar.msg}}</div>
    <div v-if="!loading" class="centerBox">
      <h6>Your account has been created. Login to continue</h6>
      <b-form @keydown.enter.prevent="logUserIn()">
        <b-input-group class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="person" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="text" placeholder="email" v-model="user.email"></b-form-input>
        </b-input-group>

        <b-input-group class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="unlock" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="password" v-model="user.password"></b-form-input>
        </b-input-group>

        <button type="button" class="button flat main" @click="logUserIn()">Continue</button>
        <p class="link main">
          <!-- Don't have an account? Sign up -->
        </p>
      </b-form>
    </div>
  </div>
</template>

<script>
const _ = require("../../services/utils");
import { mapActions } from "vuex";
export default {
  data: () => ({
    loading: false,
    snackbar: {
      msg: "",
      color: ""
    },
    user: {
      email: "",
      password: ""
    },
    userDetails: {}
  }),
  components: {
    Loading: () => import("@/components/universal/Loading")
  },
  methods: {
    ...mapActions(["changePhase"]),
    next() {
      this.changePhase("next");
    },
    back() {
      this.changePhase("prev");
    },
    showSnackbar() {
      // Get the snackbar DIV
      var x = document.getElementById("snackbar");

      // Add the "show" class to DIV
      x.className = "show";

      // After 3 seconds, remove the show class from DIV
      setTimeout(() => {
        x.className = x.className.replace("show", "");
      }, 3000);
    },
    logUserIn() {
      this.loading = true;

      const userDetails = {
        ...this.userDetails,
        email: this.user.email,
        password: this.user.password
      };

      this.$store
        .dispatch("authenticate", userDetails)
        .then(() => {
          this.loading = false;
          this.next();
          // this.$router.push("/")
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    }
  },
  created() {
    this.userDetails = _.decodeJSON(_.storage.get("userDetails"));
  }
};
</script>

<style scoped lang="scss">
@import "../../scss/custom.scss";

</style>