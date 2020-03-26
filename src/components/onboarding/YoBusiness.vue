<template>
  <div class="bg">
    <div class="centerBox">
      <h5>
        State Yo Business!
        <span>
          *Select two options
        </span>
      </h5>
      <b-form>
        <b-container class="bv-example-row">
          <b-row class="yoBusinessRow">
            <b-col 
              cols="4" 
              v-for="business in getYoBusiness"
              :key="business.no"
            >
              <div 
                class="yoBusiness"
                :class="business.state ? 'active' : ''"
                @click="toggleBusiness(business)"
              >
                <b-icon icon="person" class="icon rounded-circle p-2"></b-icon>
                <span>
                  {{business.name}}
                </span>
              </div>
            </b-col>
          </b-row>
        </b-container>
        <hr />
        <p class="descLink">
          You will be able to see potential partners from the two categories you select
        </p>
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
import { mapActions, mapGetters } from "vuex"
export default {
  data: () => ({
    user: {
      phone: "",
      dob: "",
      email: "",
    },
    businesses: []
  }),
  computed: {
    ...mapGetters(["getYoBusiness"])
  },
  methods: {
    ...mapActions(["changePhase"]),
    next() {
      this.changePhase("next")
    },
    toggleBusiness(business) {
      var count = this.businesses.filter(b => b.state == true).length

      if (business.state == true) {
        business.state = !business.state
        return
      }

      if (business.state == false) {
        if (count == 2) return
        business.state = !business.state
        return
      }
    }
  },
  created() {
    this.businesses = [...this.getYoBusiness]
    console.log(this.businesses)
  }
}
</script>

<style scoped lang="scss">
@import "../../scss/custom.scss";
h5 {
  span {
    font-size: 0.5em;
    font-weight: 100;
    display: block;
  }
}

.loginButton {
  margin-top: 30px;
}

.radioLabel {
  color: #FFF;
}

.yoBusinessRow {
  margin-top: 30px;
  margin-bottom: 0px;

  .yoBusiness {
    cursor: pointer;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;

    .icon {
      margin: 0 auto;
      font-size: 3.6em;
      border: 2px solid $mainColor;
    }

    span {
      display: block;
      text-align: center;
      font-size: 0.7em;
      text-transform: uppercase;
      letter-spacing: 1.1px;
      font-weight: 600;
      margin-top: 10px;
      color: $mainColor;
    }

    &.active {
      .icon {
        background-color: $mainColor;
        color: $bgColor;
      }
      span {
      }
    }
  }
}
</style>