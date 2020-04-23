<template>
  <div>
    <Loading v-if="loading" variant="light" />
    <div id="snackbar">{{snackbar.msg}}</div>
    <div v-if="!loading" class="centerBox">
      <h6>Great. Enter the OTP we just sent to your phone</h6>
      <p class="link main" @click="resendOTP()">Resend OTP</p>
      <b-form @keydown.enter.prevent>
        <b-form-group>
          <b-form-input
            type="text"
            size="md"
            v-model="otp"
            class="otpInput"
            @keydown.enter="resendOTP()"
          ></b-form-input>
        </b-form-group>
        <b-row>
          <b-col>
            <button type="button" class="iconBtn back" @click="back()">
              <b-icon icon="chevron-left" class="icon"></b-icon>
            </button>
          </b-col>
          <b-col>
            <button type="button" class="button main curved" @click="submitOTP()">Next</button>
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
import { mapActions } from "vuex";
const _ = require("../../services/utils");
export default {
  data: () => ({
    otp: "",
    snackbar: {
      msg: "",
      color: ""
    },
    userDetails: {},
    loading: false
  }),
  components: {
    Loading: () => import("../universal/Loading"),
    Login: () => import("@/components/onboarding/Login")
  },
  methods: {
    ...mapActions(["changePhase", "makeOTPRequest"]),
    submitOTP() {
      console.log(this.otp, this.userDetails.otp);
      if (this.otp == this.userDetails.otp) {
        this.changePhase("next");
      } else {
        this.snackbar.msg = "Incorrect OTP";
        this.showSnackbar();
        return;
      }
    },
    resendOTP() {
      this.loading = true;
      this.userDetails = _.decodeJSON(_.storage.get("userDetails"));
      this.$store
      .dispatch("makeOTPRequest", this.userDetails.phone)
      .then(otp => {
        console.log(0, otp);
        this.snackbar.msg = otp;
        this.snackbar.color = "danger";
        this.showSnackbar();
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.snackbar.msg = this.getOTPResponse;
        this.snackbar.color = "danger";
        this.showSnackbar();
      });
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
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['loginModal'].toggle('#toggle-btn')
    }
  },
  created() {
    this.userDetails = _.decodeJSON(_.storage.get("userDetails"));

    window.setTimeout(() => {
      this.loading = false;
      this.snackbar.msg = this.userDetails.otp;
      this.snackbar.color = "danger";
      this.showSnackbar();
    }, 500);
  }
};
</script>

<style scoped lang="scss">
@import "../../scss/custom.scss";
.otpInput {
  letter-spacing: 5px;
  text-align: center;
}
</style>