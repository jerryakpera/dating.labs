<template>
  <div>
    <div class="bg">
      <div class="centerBox">
        <transition name="fade">
          <Phone v-if="getOnboardingPhase == 0" />
          <OTP v-if="getOnboardingPhase == 1" />
          <UserDetails v-if="getOnboardingPhase == 2" />
          <Interests v-if="getOnboardingPhase == 3" />
          <YoBusiness v-if="getOnboardingPhase == 4" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data: () => ({
    phone: ""
  }),
  components: {
    Phone: () => import("../components/onboarding/Phone"),
    OTP: () => import("../components/onboarding/OTP"),
    UserDetails: () => import("../components/onboarding/UserDetails"),
    Interests: () => import("../components/onboarding/Interests"),
    YoBusiness: () => import("../components/onboarding/YoBusiness")
  },
  computed: {
    ...mapGetters(["getOnboardingPhase"])
  }
}
</script>

<style scoped>
@import "../scss/custom.scss";

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>