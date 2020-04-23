<template>
  <div>
    <Loading v-if="loading" variant="light" />
    <div id="snackbar">{{snackbar.msg}}</div>
    <div v-if="!loading" class="centerBox">
      <h6>Progress! Spice up your profile with some photos</h6>
      <b-form @submit.prevent>
        <b-input-group size="md" class="mb-3">
          <b-input-group-prepend is-text>
            <b-icon icon="image" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Upload photo"
            drop-placeholder="Drop file here..."
          ></b-form-file>
        </b-input-group>
        <b-row>
          <b-col>
            <button @click="back()" type="button" class="iconBtn back">
              <b-icon icon="chevron-left" class="icon"></b-icon>
            </button>
          </b-col>
          <b-col>
            <button type="button" class="button main curved" @click="submitPhotos()">Next</button>
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
    loading: false,
    snackbar: {
      msg: "",
      color: ""
    },
    file: null,
    file2: null
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
    submitPhotos() {
      this.next()
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

/* The snackbar - position it at the bottom and in the middle of the screen */
</style>