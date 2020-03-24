<template>
  <div id="app">
    <Toolbar 
      v-if="this.$route.path != '/login' && this.$route.path != '/onboarding'"
    />
    <content>
      <div>
        <router-view />
      </div>
    </content>
  </div>
</template>

<script>
export default {
  components: {
    Toolbar: () => import("@/components/core/Toolbar")
  }
}
</script>

<style lang="scss">
@import "./scss/custom.scss";

.goButton {
  background-color: $mainColor;
}

</style>
