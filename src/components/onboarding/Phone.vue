<template>
  <div class="mainBox">
    <Loading v-if="loading" variant="light" />
    <div id="snackbar">{{snackbar.msg}}</div>
    <div v-if="!loading" class="centerBox">
      <h6>Nice one! We need your phone number to set things up</h6>
      <b-form @keydown.enter.prevent="submitPhone()">
        <b-input-group size="md" class="mb-3">
          <b-input-group-prepend is-text>
            <b-icon icon="phone" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            type="text"
            placeholder="07 . . . "
            v-model="phone"
            @keydown.enter="submitPhone()"
          ></b-form-input>
        </b-input-group>
        <b-row>
          <b-col>
            <router-link to="/welcome">
              <button type="button" class="iconBtn back">
                <b-icon icon="chevron-left" class="icon"></b-icon>
              </button>
            </router-link>
          </b-col>
          <b-col>
            <button type="button" class="button main curved" @click="submitPhone()">Next</button>
          </b-col>
        </b-row>
        <p
          class="link main"
          v-b-modal.modal-center
          id="toggle-btn"
          @click="toggleModal"
        >
          Already have an account? Login
        </p>
      </b-form>
    </div>
    <div>
      <b-modal size="sm" ref="loginModal" centered hide-footer title="Login">
        <Login />
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    phone: "",
    loading: false,
    snackbar: {
      msg: "",
      color: ""
    }
  }),
  components: {
    Loading: () => import("../universal/Loading"),
    Login: () => import("@/components/onboarding/Login")
  },
  computed: {
    ...mapGetters(["getOTPResponse", "getOTP"])
  },
  methods: {
    ...mapActions(["changePhase", "makeOTPRequest"]),
    next() {
      this.changePhase("next");
    },
    back() {
      this.changePhase("prev");
    },
    submitPhone() {
      this.loading = true;
      if (this.phone.length != 10) {
        this.snackbar.msg = "Enter valid phone";
        this.snackbar.color = "danger";
        this.showSnackbar();
        this.loading = false;
        return;
      } else {
        this.$store
        .dispatch("makeOTPRequest", this.phone)
        .then(() => {
          this.loading = false;
          this.changePhase("next");
        })
        .catch(() => {
          this.loading = false;
          this.snackbar.msg = "Couldnt connect. Try again";
          this.snackbar.color = "danger";
          this.showSnackbar();
          return;
        });
      }
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
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['loginModal'].toggle('#toggle-btn')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/custom.scss";
// @import "../../scss/onboarding/welcome.scss";

/* The snackbar - position it at the bottom and in the middle of the screen */
</style>