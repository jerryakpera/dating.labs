<template>
  <div>
    <Loading v-if="loading" variant="dark" />
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="4">
          <div class="profileBox" v-if="!loading">
            <div class="photoBox" @click="editPics()">
              <b-img class="profilePhoto" center src="https://images.pexels.com/photos/1350570/pexels-photo-1350570.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" v-bind="mainProps" alt="Circle image"></b-img>
              <span class="photoEditBtn">
                Edit
              </span>
            </div>
          </div>
        </b-col>
        <b-col cols="8">
          <div class="category">
            <h1>Bio <span>Edit</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam, sit repudiandae aliquid, numquam accusamus, itaque ea ipsa natus ad animi! Voluptas unde vitae fuga nihil debitis laboriosam quis fugiat eos distinctio. Eligendi impedit quia quas. Tempora aspernatur officia praesentium?</p>
          </div>
          <div class="category">
            <h1>Interests <span>Edit</span></h1>
            <div class="hobbyCard active">
              <div>
                swimming
              </div>
            </div>
            <div class="hobbyCard active">
              <div>
                eating
              </div>
            </div>
            <div class="hobbyCard active">
              <div>
                dancing
              </div>
            </div>
            <div class="hobbyCard active">
              <div>
                yoga
              </div>
            </div>
          </div>
          <div class="category">
            <h1>Events <span>Edit</span></h1>
            <ol>
              <li class="event">
                Cooking and wine
                <span>
                  (subscribers : 5)
                </span>
              </li>
              <li class="event">
                420
                <span>
                  (subscribers : 9)
                </span>
              </li>
              <li class="event">
                Ice skating
                <span>
                  (subscribers : 5)
                </span>
              </li>
            </ol>
          </div>
          <div class="category">
            <b-card
              title="Show me on dating labs?"
              tag="article"
              class="mb-2"
            >
              <b-card-text>
                <b-form-group>
                  <b-form-radio-group
                    v-model="showMe"
                    :options="options"
                    plain
                    name="plain-inline"
                  ></b-form-radio-group>
                </b-form-group>
              </b-card-text>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    mainProps: { blankColor: '#777', width: 300, height: 300, class: 'm1' },
    showMe: 'first',
    options: [
      { text: 'Sure', value: true },
      { text: 'Nah', value: 'false' }
    ]
  }),
  components: {
    Loading: () => import("@/components/universal/Loading")
  },
  methods: {
    editPics() {
      this.loading = true;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/custom.scss";
.profileBox {
  .photoBox {
    padding: 0;
    width: 300px;
    box-shadow: 0 5px 6px #CCC;
    cursor: pointer;
  }

  .photoEditBtn {
    width: 100%;
    display: block;
    margin: 0;
    background-color: $mainColor;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8em;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    color: #FFF;
    text-align: center;


    &:hover {
      background-color: darken($mainColor, 10);
    }
  }
}

.category {
  h1 {
    span {
      // border: 1px solid red;
      font-size: 0.3em;
      color: $mainColor;
      cursor: pointer;
    }
  }

  .photo {
    width: 100px;
    height: 100px;
  }

  .event {
    cursor: pointer;
    span {
      font-weight: bold;
      font-size: 0.7em;
      color: $negative;
    }
  }

  .hobbyCard {
    padding: 5px 10px 5px 10px;
    display: inline-block;
    color: #fff;
    text-transform: lowercase;
    margin: 10px 5px;
    font-size: 0.8em;
    border-radius: 15px;
    border: 1px solid #fff;
    transition: all 0.3s ease;

    &:hover {
      background-color: $mainColor;
      border: 1px solid $mainColor;
      box-shadow: 0 1px 1px #CCC;

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
}
</style>