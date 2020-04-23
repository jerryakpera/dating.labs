<template>
  <div class="bg">
    <Loading v-if="loading" variant="light" />
    <div class="centerBox" v-if="!loading">
      <div id="snackbar">{{snackbar.msg}}</div>
      <h6>Great. What are some of the things you do for fun?</h6>
      <b-form @submit.prevent>
        <div :key="componentKey">
          <div v-for="hobby in hobbies.user" :key="hobby.id" class="hobbyCard active">
            <div v-if="hobby.state == 1" @click="removeInterest(hobby)">
              {{hobby.hobby}}
              <span>
                <b-icon icon="x" class="icon"></b-icon>
              </span>
            </div>
          </div>
          <div
            v-for="hobby in hobbies.view"
            :key="hobby.id"
            class="hobbyCard"
            :class="hobby.state ? 'active': 'inactive'"
          >
            <div v-if="hobby.state == 1" @click="toggleHobby(hobby)">
              {{hobby.hobby}}
              <span>
                <b-icon icon="x" class="icon"></b-icon>
              </span>
            </div>
            <div v-else @click="toggleHobby(hobby)">
              {{hobby.hobby}}
              <span>
                <b-icon icon="plus" class="icon"></b-icon>
              </span>
            </div>
          </div>
        </div>
        <b-input-group size="md" class="mb-3">
          <b-form-input
            type="text"
            placeholder="add"
            v-model="hobbyInput"
            @keyup.enter.prevent="addNewInterest"
          ></b-form-input>
        </b-input-group>
        <b-row class="buttonRow">
          <b-col>
            <button type="button" class="iconBtn back" @click="back()">
              <b-icon icon="chevron-left" class="icon"></b-icon>
            </button>
          </b-col>
          <b-col>
            <button type="button" class="button main curved" @click="submitUserInterests()">Next</button>
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
    componentKey: 0,
    user: {
      phone: "",
      dob: "",
      email: ""
    },
    hobbyInput: "",
    hobbies: {
      all: [],
      userCount: 0,
      view: [],
      user: []
    },
    snackbar: {
      msg: "",
      color: ""
    },
    userInterests: [],
    viewInterests: [],
    filteredInterests: []
  }),
  methods: {
    ...mapActions(["changePhase"]),
    next() {
      this.changePhase("next");
    },
    processInterests(hobbies) {
      this.hobbies.view = [];
      this.hobbies.all = [];

      hobbies.forEach((hobby, i) => {
        if (i < 11) {
          this.hobbies.view.push(hobby);
        }
        this.hobbies.all.push(hobby);
      });
    },
    toggleHobby(hobby) {
      let activeHobbies =
        this.hobbies.all.filter(hobby => hobby.state).length +
        this.hobbies.user.length;

      if (activeHobbies >= 10 && !hobby.state) {
        this.snackbar.msg = "Only 10 interests";
        this.snackbar.color = "danger";
        this.showSnackbar();
        return;
      }

      this.hobbies.all.forEach(h => {
        if (hobby.id == h.id) {
          h.state = !h.state;
        }
      });

      this.hobbyInput = "";
      this.sortInterests();
    },
    sortInterests() {
      const sorted = this.hobbies.all.sort((a, b) => b.state - a.state);

      this.processInterests(sorted);
    },
    addNewInterest() {
      const names = [];
      this.hobbies.all.forEach(hobby => {
        names.push(hobby.hobby);
      });

      if (names.includes(this.hobbyInput)) {
        this.hobbies.all.forEach(hobby => {
          if (hobby.hobby == this.hobbyInput) {
            this.toggleHobby(hobby);
          }
        });
        return;
      }

      const newInterest = {
        id: _.getID(),
        hobby: this.hobbyInput,
        state: 1
      };

      this.hobbyInput = "";
      this.hobbies.user.push(newInterest);
      this.processInterests(this.hobbies.all);
    },
    removeInterest(hobby) {
      const userInterests = this.hobbies.user.filter(v => v.id != hobby.id);

      this.hobbies.user = [...userInterests];
    },
    searchInterests(value) {
      const filtered = [];

      this.hobbies.all.filter(hobby => {
        if (hobby.hobby.includes(value)) {
          filtered.push(hobby);
        }
      });

      this.hobbies.view = [];

      filtered.forEach((hobby, i) => {
        if (i < 11) this.hobbies.view.push(hobby);
      });
    },
    submitUserInterests() {
      this.loading = true;

      const userInterests = {
        existing_interest: [],
        id: 0,
        new_interests: []
      };

      this.hobbies.user.forEach(hobby =>
        userInterests.new_interests.push(hobby.hobby)
      );

      this.hobbies.all.forEach(hobby => {
        if (hobby.state == 1) {
          delete hobby.state;
          userInterests.existing_interest.push(hobby);
        }
      });

      let user = _.storage.get("userDetails");
      user = _.decodeJSON(user);

      userInterests.id = user.id;

      this.$store
      .dispatch("submitUserInterestsRequest", userInterests)
      .then(() => {
        this.loading = false;
        this.next();
      })
      .catch(() => {
        this.loading = false;
      });
    },
    back() {
      this.changePhase("prev");
    },
    showSnackbar() {
      // Get the snackbar DIV
      var x = document.getElementById("snackbar");

      // Add the "show" class to DIV
      x.className = "show";

      // After 3 seconds, remove the show class from DIV
      setTimeout(() => {
        x.className = x.className.replace("show", "");
      }, 3000);
    }
  },
  computed: {
    ...mapGetters(["getInterests"])
  },
  components: {
    Loading: () => import("../universal/Loading")
  },
  watch: {
    hobbyInput(v) {
      if (v.trim().length == 0) {
        this.processInterests(this.getInterests);
      } else {
        this.searchInterests(v);
      }
    }
  },
  created() {
    this.loading = true;
    this.$store
    .dispatch("fetchAllInterests")
    .then(res => {
      this.loading = false;
      this.processInterests(res);
    })
    .catch(err => {
      console.log(err);
    });
  }
};
</script>

<style scoped lang="scss">
@import "../../scss/custom.scss";

.radioLabel {
  color: #fff;
}

.hobbyCard {
  padding: 5px 5px 5px 10px;
  display: inline-block;
  color: #fff;
  text-transform: lowercase;
  margin: 10px 5px;
  font-size: 0.8em;
  border-radius: 15px;
  border: 1px solid #fff;

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: $mainColor;
    border: 1px solid $mainColor;
    box-shadow: 0 1px 1px #000;

    .icon {
      color: #fff;
    }
  }

  .icon {
    margin-left: 12px;
    cursor: pointer;
  }

  &.active {
    background-color: $mainColor;
    border: 1px solid $mainColor;
    color: #fff;

    .icon {
      margin-left: 12px;
      color: #fff;
    }
  }
}
</style>