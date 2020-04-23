<template>
  <div class="home">
    <div>
      <h1>HOME PAGE</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Home',
  data: () => ({
    meal: ""
  }),
  computed: {
    ...mapGetters(["onboardingPhase"])
  },
  methods: {
    getMeal() {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/custom.scss";

.navBar {
  background-color: $mainColor;
}
</style>