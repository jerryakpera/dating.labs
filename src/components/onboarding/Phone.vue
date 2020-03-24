<template>
  <div class="bg">
    <div class="centerBox">
      <h6>Enter your phone number to proceed</h6>
      <b-form>
        <b-input-group
          size="lg"
          class="mb-3"
        >
          <b-input-group-prepend is-text>
            <b-icon icon="phone" class="icon"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            type="text"
            placeholder="254"
            v-model="phone"
          ></b-form-input> 
        </b-input-group>
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
    phone: ""
  }),
  methods: {
    ...mapActions(["changePhase"]),
    next() {
      this.changePhase("next")
    }
  }
}
</script>