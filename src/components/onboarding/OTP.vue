<template>
  <div class="bg">
    <div class="centerBox">
      <h6>Enter the verification code we just sent to your phone number</h6>
      <b-form>
        <b-form-group>
          <b-form-input
            type="text"
            size="lg"
            v-model="otp1"
            class="otpInput"
          ></b-form-input>
          <b-form-input
            type="text"
            size="lg"
            v-model="otp2"
            class="otpInput"
          ></b-form-input>
          <b-form-input
            type="text"
            size="lg"
            v-model="otp3"
            class="otpInput"
          ></b-form-input>
          <b-form-input
            type="text"
            size="lg"
            v-model="otp4"
            class="otpInput"
          ></b-form-input>
        </b-form-group>
        <b-row>
          <b-col>
            <button
              type="button"
              class="loginButton resendButton"
            >
              Resend
            </button> 
          </b-col>
          <b-col>
            <button
              type="button"
              class="loginButton nextButton"
              @click="next()"
            >
              <b-icon icon="chevron-right" class="icon"></b-icon>
            </button>
          </b-col>
        </b-row>
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
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: ""
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
.otpInput {
  width: 55px;
  text-align: center;
  display: inline-block;
  margin-right: 27px;
}

.resendButton {
  border: 1px solid $mainColor;
  background-color: rgba(0, 0, 0, 0);
}

.nextButton {
  width: 40px;
  border-radius: 50%;
  height: 40px;
  padding: 0;
  float: right;
  margin-right: 28px;

  .icon {
    color: #FFF;
    font-weight: 600;
  }
}

</style>