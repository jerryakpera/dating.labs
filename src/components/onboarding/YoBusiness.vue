<template>
  <div class="bg">
    <Loading v-if="loading" variant="light" />
    <div class="centerBox centerBoxUp" v-if="!loading">
      <h6>
        State Yo Business!
        <span>*Select two options</span>
      </h6>
      <b-form>
        <b-container class="bv-example-row">
          <b-row class="yoBusinessRow">
            <b-col cols="4" v-for="business in businesses" :key="business.no">
              <div
                class="yoBusiness"
                :class="business.state ? 'active' : ''"
                @click="toggleBusiness(business)"
              >
                <b-icon icon="person" class="icon rounded-circle p-2"></b-icon>
                <span>{{business.type}}</span>
              </div>
            </b-col>
          </b-row>
        </b-container>
        <hr />
        <p
          class="main"
        >You will be able to see potential partners from the two categories you select</p>
        <b-row>
          <b-col>
            <button type="button" class="iconBtn back" @click="back()">
              <b-icon icon="chevron-left" class="icon"></b-icon>
            </button>
          </b-col>
          <b-col>
            <button type="button" class="button main curved" @click="submitYoBusiness()">Next</button>
          </b-col>
        </b-row>
        <p
          class="link main"
          v-b-modal.modal-center
          id="toggle-btn"
          @click="next()"
        >
          Skip and start swiping
        </p>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
const _ = require("../../services/utils");
export default {
  data: () => ({
    loading: false,
    user: {
      phone: "",
      dob: "",
      email: ""
    },
    businesses: []
  }),
  computed: {
    ...mapGetters(["getYoBusiness"])
  },
  components: {
    Loading: () => import("../universal/Loading")
  },
  methods: {
    ...mapActions(["changePhase"]),
    next() {
      this.changePhase("next");
    },
    processBusinesses(businesses) {
      businesses.forEach(business => {
        this.businesses.push(business);
      });
    },
    toggleBusiness(business) {
      var count = this.businesses.filter(b => b.state == true).length;

      if (business.state == true) {
        business.state = !business.state;
        return;
      }

      if (business.state == false) {
        if (count == 2) return;
        business.state = !business.state;
        return;
      }
    },
    submitYoBusiness() {
      this.loading = true;

      const yoBusiness = {
        id: 0,
        yo_business: []
      };

      this.businesses.forEach(business => {
        if (business.state) {
          yoBusiness.yo_business.push(business.type);
        }
      });

      let user = _.storage.get("userDetails");
      user = _.decodeJSON(user);

      yoBusiness.id = user.id;

      this.$store
        .dispatch("submitYoBusinessRequest", yoBusiness)
        .then(() => {
          this.loading = false;
          this.$router.push;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  },
  created() {
    this.loading = true;
    this.$store
      .dispatch("fetchYoBusiness")
      .then(res => {
        this.loading = false;
        this.processBusinesses(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/custom.scss";

.centerBoxUp {
  margin-top: 100px;
}

h6 {
  span {
    font-weight: 400;
    display: block;
    color: $mainColor;
    text-decoration: underline;
  }
}

.yoBusinessRow {
  .yoBusiness {
    width: 100%;
    text-align: center;
    margin: 15px 10px;

    .icon {
      margin: 0 auto;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px solid #fff;
      color: #fff;
      font-size: 0.7em;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    span {
      transition: all 0.3s ease;
      color: #fff;
      font-size: 0.7em;
      text-align: center;
      display: block;
      text-transform: uppercase;
    }

    &.active {
      .icon {
        border: 2px solid $mainColor;
        background-color: $mainColor;
      }

      span {
        color: $mainColor;
        font-weight: bold;
      }
    }
  }
}

p.main {
  color: #fff;
  font-size: 0.8em;
}
</style>