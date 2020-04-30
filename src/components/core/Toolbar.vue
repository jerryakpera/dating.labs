<template>
  <div>
    <b-navbar toggleable="sm" type="dark" class="navBar">
      <router-link to="/">
        <b-navbar-brand>dating.labs</b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Matches</b-nav-item>
          <b-nav-item href="#">Events</b-nav-item>
          <b-nav-item href="#">Chat</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <!-- <em>User</em> -->
              <b-icon-person-fill></b-icon-person-fill>
            </template>
            <b-dropdown-item @click="goTo('profile')">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#" @click="logout()">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    meal: ""
  }),
  methods: {
    goTo(page) {
      this.$router.push(`/${page}`)
    },
    logout() {
      this.$store.dispatch("logUserOut")
      .then(() => {
        this.$router.push("/welcome")
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../scss/custom.scss";



.navBar {
  background-color: $darkColor;
}
</style>