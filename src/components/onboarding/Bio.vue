<template>
  <div class="mainBox">
    <Loading v-if="loading" variant="light" />
    <div id="snackbar">{{snackbar.msg}}</div>
    <div v-if="!loading" class="centerBox">
      <h6>Finally, tell us a little about yourself...</h6>
      <b-form>
        <b-input-group size="md" class="mb-1">
          <b-form-input
            type="text"
            placeholder="what do you do?"
            v-model="user.job"
            @keyup.enter.prevent="submitInfo()"
          ></b-form-input>
        </b-input-group>
        <b-input-group class="mb-3">
          <b-form-textarea
            id="textarea"
            v-model="user.bio"
            placeholder="what are you about?"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-input-group>
        <b-row>
          <b-col>
            <button type="button" class="iconBtn back" @click="back()">
              <b-icon icon="chevron-left" class="icon"></b-icon>
            </button>
          </b-col>
          <b-col>
            <button type="button" class="button main curved" @click="submitInfo()">Next</button>
          </b-col>
        </b-row>
        <p
          class="link main"
          v-b-modal.modal-center
          id="toggle-btn"
          @click="next()"
        >
          Skip and start searching
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
      bio: "",
      job: ""
    },
    userDetails: {}
  }),
  components: {
    Loading: () => import("../universal/Loading")
  },
  methods: {
    ...mapActions(["changePhase"]),
    submitInfo() {
      this.loading = true;
      const userInfo = {
        bio: this.user.bio,
        job: this.user.job
      };

      this.$store.dispatch("submitUserInfo", userInfo)
      this.next()
    },
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