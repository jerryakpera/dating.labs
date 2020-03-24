<template>
  <div class="bg">
    <div class="centerBox">
      <h6>Before we get started tell us about yourself</h6>
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
            placeholder="name"
            v-model="user.name"
          ></b-form-input> 
        </b-input-group>

        <b-input-group
          size="lg"
          class="mb-3"
        >
          <b-input-group-prepend is-text>
            <b-icon icon="calendar" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            type="text"
            placeholder="dob"
            v-model="user.dob"
          ></b-form-input> 
        </b-input-group>

        <b-input-group
          size="lg"
          class="mb-3"
        >
          <b-input-group-prepend is-text>
            <b-icon icon="envelope" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            type="text"
            placeholder="email"
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
        <b-form-group label="Gender" class="radioLabel">
          <b-form-radio-group id="radio-group-2" v-model="gender" name="radio-sub-component">
            <b-form-radio value="male">Male</b-form-radio>
            <b-form-radio value="female">Female</b-form-radio>
          </b-form-radio-group>
        </b-form-group>
        <button
          type="button"
          class="loginButton"
          @click="next()"
        >
          Next
        </button>
        <p class="textLink">
          Already have an account? Login
        </p>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  data: () => ({
    user: {
      phone: "",
      dob: "",
      email: "",
    },
    gender: "male"
  }),
  methods: {
    ...mapActions(["changePhase"]),
    next() {
      this.changePhase("next")
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../scss/custom.scss";

.radioLabel {
  color: #FFF;
}
</style>