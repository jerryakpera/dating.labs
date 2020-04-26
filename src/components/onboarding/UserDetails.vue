<template>
  <div class="mainBox">
    <Loading v-if="loading" variant="light" />
    <div id="snackbar">{{snackbar.msg}}</div>
    <div v-if="!loading" class="centerBox">
      <h6>Before we get started tell us about yourself</h6>
    
      <b-form @keydown.enter.prevent="submitUserDetails()">
        <b-input-group size="md" class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="person" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input 
            type="text" 
            placeholder="name" 
            v-model="user.name"
          ></b-form-input>
        </b-input-group>

        <b-input-group>
          <b-form-datepicker id="example-datepicker" v-model="user.dob" class="mb-2"></b-form-datepicker>
        </b-input-group>

        <b-input-group class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="envelope" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="text" placeholder="email" v-model="user.email"></b-form-input>
        </b-input-group>

        <b-input-group class="mb-1">
          <b-input-group-prepend is-text>
            <b-icon icon="unlock" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input type="password" v-model="user.password" placeholder="password"></b-form-input>
        </b-input-group>

        <b-input-group class="mb-3">
          <b-input-group-prepend is-text>
            <b-icon icon="unlock" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            type="password"
            v-model="user.confirmPassword"
            placeholder="confirm password"
          ></b-form-input>
        </b-input-group>
        <b-form-group label="Gender" class="radioLabel">
          <b-form-radio-group id="radio-group-2" v-model="user.gender" name="radio-sub-component">
            <b-form-radio value="male">Male</b-form-radio>
            <b-form-radio value="female">Female</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <b-row>
          <b-col>
            <button type="button" class="iconBtn back" @click="back()">
              <b-icon icon="chevron-left" class="icon"></b-icon>
            </button>
          </b-col>
          <b-col>
            <button type="button" class="button main curved" @click="submitUserDetails()">Next</button>
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
      phone: "",
      otp: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
      name: ""
    },
    userDetails: {}
  }),
  components: {
    Loading: () => import("../universal/Loading"),
    Login: () => import("@/components/onboarding/Login")
  },
  methods: {
    ...mapActions(["changePhase"]),
    next() {
      this.changePhase("next");
    },
    back() {
      this.changePhase("back");
    },
    submitUserDetails() {
      this.loading = true;
      const userDetails = {
        ...this.user,
        phone: this.userDetails.phone,
        otp: this.userDetails.otp
      };

      if (userDetails.name.trim() == "") {
        this.loading = false;
        this.snackbar.msg = "Name cannot be empty";
        this.showSnackbar();
        return;
      }

      if (userDetails.password != userDetails.confirmPassword) {
        this.loading = false;
        this.snackbar.msg = "Passwords do not match";
        this.showSnackbar();
        return;
      }

      const dob = this.user.dob

      if (dob.trim() == "") {
        this.loading = false;
        this.snackbar.msg = "DOB cannot be empty";
        this.showSnackbar();
        return;
      }
      const today = {
        year: new Date().getFullYear()
      }
      const [year, month, date] = dob.split("-")
      
      if (today.year - year < 18) {
        this.loading = false;
        this.snackbar.msg = "Youre too young";
        this.showSnackbar();
        return;
      }

      userDetails.dob = `${year}-${month}-${date}`

      delete userDetails.otp;
      delete userDetails.confirmPassword;

      console.log(userDetails)
      this.$store
      .dispatch("makeUserDetailsRequest", userDetails)
      .then(() => {
        this.changePhase("next");
      })
      .catch(() => {
        this.loading = false;
      });
      // _.storage.save("userDetails", _.encodeJSON(userDetails))
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
  }
};
</script>

<style scoped lang="scss">
@import "../../scss/custom.scss";

.radioLabel {
  color: #fff;
}

.centerBoxUp {
  margin-top: -60px;
}
</style>