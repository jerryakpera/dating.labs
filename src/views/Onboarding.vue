<template>
  <div>
    <div class="bg">
      <div class="centerBox">
        <transition name="fade">
          <Phone v-if="getOnboardingPhase == 6" />
          <OTP v-if="getOnboardingPhase == 1" />
          <Photos v-if="getOnboardingPhase == 2" />
          <UserDetails v-if="getOnboardingPhase == 3" />
          <Authenticate v-if="getOnboardingPhase == 4" />
          <Bio v-if="getOnboardingPhase == 5" />
          <Interests v-if="getOnboardingPhase == 0" />
          <YoBusiness v-if="getOnboardingPhase == 7" />
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
    Photos: () => import("../components/onboarding/Photos"),
    OTP: () => import("../components/onboarding/OTP"),
    Authenticate: () => import("../components/onboarding/Authenticate"),
    UserDetails: () => import("../components/onboarding/UserDetails"),
    Bio: () => import("../components/onboarding/Bio"),
    Interests: () => import("../components/onboarding/Interests"),
    YoBusiness: () => import("../components/onboarding/YoBusiness")
  },
  computed: {
    ...mapGetters(["getOnboardingPhase"])
  }
}
</script>

<style lang="scss">
@import "../scss/custom.scss";



</style>