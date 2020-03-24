<template>
  <div class="bg">
    <div class="centerBox">
      <h6>What do you do for fun?</h6>
      <b-form>
        <b-input-group
          size="lg"
          class="mb-3"
        >
          <b-form-input
            type="text"
            placeholder="start typing"
            v-model="hobbyInput"
            @keyup="filterHobbies"
          ></b-form-input> 
        </b-input-group>
        <div>
          <div
            v-for="(hobby, i) in filteredInterests"
            :key="i"
            class="hobbyCard"
            :class="hobby.state ? 'active': 'inactive'"
          >
            {{hobby.name}}
            <span v-if="hobby.state">
              <b-icon icon="x" class="icon" @click="toggleHobby(i)"></b-icon>
            </span>
            <span v-else>
              <b-icon icon="plus" class="icon" @click="toggleHobby(i)"></b-icon>
            </span>
          </div>
        </div>
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
    hobbyInput: "",
    filteredInterests: []
  }),
  methods: {
    ...mapActions(["changePhase"]),
    next() {
      this.changePhase("next")
    },
    toggleHobby(i) {
      if (this.filteredInterests[i].state == 0) {
        this.filteredInterests[i].state = 1
      } else {
        this.filteredInterests[i].state = 0
      }
    },
    filterHobbies() {
      if (this.hobbyInput == "") {
        this.filteredInterests = this.getInterests.slice(0, 8)
        return
      }

      const filtered = this.getInterests.filter(hobby => {
        if (hobby.name.includes(this.hobbyInput) || hobby.state == 1) {
          return hobby
        }
      })

      this.filteredInterests = filtered
    }
  },
  computed: {
    ...mapGetters(["getInterests"])
  },
  created() {
    this.filteredInterests = this.getInterests.slice(0, 8)
  }
}
</script>

<style scoped lang="scss">
@import "../../scss/custom.scss";

.radioLabel {
  color: #FFF;
}

.hobbyCard {
  padding: 5px 5px 5px 10px;
  display: inline-block;
  color: #FFF;
  text-transform: lowercase;
  margin: 10px 5px;
  font-size: 0.8em;
  border-radius: 15px;
  border: 1px solid #FFF;

  .icon {
    margin-left: 12px;
    cursor: pointer;
  }

  &.active {
    background-color: $mainColor;
    border: 1px solid $mainColor;
    color: #FFF;

    .icon {
      margin-left: 12px;
      color: #FFF;
    }
  }
}
</style>