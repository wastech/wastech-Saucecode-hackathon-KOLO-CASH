<template>
  <div class="main">
    <div class="row">
      <div class="hello col-sm-2">
        <sb />
      </div>

      <div class="col-sm-9">
        <div class="container row">
          <div class="col-auto mr-auto">
            <div class="name">
              <h1>{{ user.firstName }} {{ user.lastName }}</h1>
              <span>good morning, please have a breakfast</span>
            </div>
          </div>
          <div class="col-auto">
            <div class="image">
              <img :src="user.photoURL" alt="" />
            </div>
          </div>
        </div>

        <div class="loan">
          <h3 class="head">Current Loan requests</h3>

          <div class="media position-relative">
            <img
              src="https://previews.123rf.com/images/belchonock/belchonock1908/belchonock190811328/128759729-handsome-young-african-american-man-on-city-street-space-for-text.jpg"
              class="img mr-5"
              alt=""
            />
            <div class="media-body">
              <h5 class="mt-0">Aremu is asking for a loan</h5>
              <a href="#" class="stretched-link">click to send</a>
            </div>
          </div>

          <div class="media position-relative">
            <img
              src="https://previews.123rf.com/images/belchonock/belchonock1908/belchonock190811328/128759729-handsome-young-african-american-man-on-city-street-space-for-text.jpg"
              class="img mr-5"
              alt=""
            />
            <div class="media-body">
              <h5 class="mt-0">Aremu is asking for a loan</h5>
              <a href="#" class="stretched-link">click to send</a>
            </div>
          </div>
        </div>

<!-- friens --->
 <div class="loan">
          <h3 class="head">Friends</h3>

          <div class="media position-relative">
            <img
              src="https://previews.123rf.com/images/belchonock/belchonock1908/belchonock190811328/128759729-handsome-young-african-american-man-on-city-street-space-for-text.jpg"
              class="img mr-2"
              alt=""
            />
            <div class="media-body">
              <h5 class="mt-0">Aremu </h5>
             
            </div>
          </div>

          <div class="media position-relative">
            <img
              src="https://previews.123rf.com/images/belchonock/belchonock1908/belchonock190811328/128759729-handsome-young-african-american-man-on-city-street-space-for-text.jpg"
              class="img mr-2"
              alt=""
            />
            <div class="media-body">
              <h5 class="mt-0">Aremu </h5>
             
            </div>
          </div>
        </div>




      </div>
    </div>
  </div>
</template>
<script>
import sb from "../components/sb";
import { mapActions } from "vuex";
export default {
  components: {
    sb,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {},
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  created() {},
};
</script>

<style scoped>
.hello {
  background-color: #640064;
  height: 30em;
}

img {
  width: 20%;
  border-radius: 50%;
  object-fit: contain;
  height: 100px;
}
.img {
  width: 3em;
  border-radius: 50%;
  object-fit: cover;
  height: 3em;
}
.image {
  text-align: right;
}
.col-auto {
  margin-top: 1em;
}
.head {
  margin-top: 2em;
  font-weight: 600;
  font-size: x-large;
  color: #858085;
}
.head {
  margin-top: 2em;
  font-weight: 600;
  font-size: x-large;
  color: #858085;
}
h5 {
  color: #858085;
  font-size: medium;
  font-weight: 600;
}
a.stretched-link {
  color: #640064 !important;
  font-style: italic;
  font-size: medium;
  font-weight: bold;
}
.media {
  margin-top: 1.5em;
}
</style>
