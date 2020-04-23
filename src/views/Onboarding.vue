<template>
  <div>
    <div class="bg">
      <div class="centerBox">
        <transition name="fade">
          <Phone v-if="getOnboardingPhase == 3" />
          <OTP v-if="getOnboardingPhase == 1" />
          <Photos v-if="getOnboardingPhase == 2" />
          <UserDetails v-if="getOnboardingPhase == 0" />
          <Authenticate v-if="getOnboardingPhase == 4" />
          <Bio v-if="getOnboardingPhase == 5" />
          <Interests v-if="getOnboardingPhase == 6" />
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

h6 {
  color: #FFF;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.bg {
  background: linear-gradient(rgba(204, 0, 255, 0.5), rgba(0, 0, 0, 0.3)), url("../assets/images/bg/bg4.jpg");
  background-size: cover;
}

.buttonRow {
  margin: 30px 0;
}

#snackbar {
  visibility: hidden;
  width: 350px;
  margin: 0 auto;
  font-weight: bold;
  border: 1px solid $mainColor;
  color: $mainColor;
  background-color: #fff;
  text-align: center;
  padding: 12px 35px;
  position: fixed;
  z-index: 1;
  // left: 50%;
  top: 30px;
  border-radius: 5px;
  /* Show the snackbar when clicking on a button (class added with JavaScript) */
  &.show {
    visibility: visible !important; /* Show the snackbar */

    /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  /* Animations to fade the snackbar in and out */
  @-webkit-keyframes fadein {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      top: 0;
      opacity: 0;
    }
    to {
      top: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      top: 30px;
      opacity: 1;
    }
    to {
      top: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      top: 30px;
      opacity: 1;
    }
    to {
      top: 0;
      opacity: 0;
    }
  }
}

</style>