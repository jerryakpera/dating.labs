<template>
  <div id="app">
    <Toolbar 
      v-if="this.$route.path != '/login' && this.$route.path != '/onboarding' && this.$route.path != '/welcome'"
    />
    <content>
      <div class="mainView">
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

.mainView {
  padding: 12px;
  margin-top: 20px;
}

</style>
