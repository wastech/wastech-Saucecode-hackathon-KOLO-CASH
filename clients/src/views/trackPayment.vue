<template>
  <div class="main">
    <div class="row">
      <div class="hello col-sm-2">
        <sideBar />
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
       

       <!-- recent activities-->
      <div class="activities">
        <h2>Recent activities</h2>
<div class="d-flex justify-content-around">
  <p>david attah  </p>
   <p>just send you</p>
    <p>N 30000</p>
</div>

      </div>
      </div>
    </div>
  </div>
</template>
<script>
import sideBar from "../components/sb";
import { mapActions } from "vuex";
export default {
  components: {
    sideBar,
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
.image {
  text-align: right;
}
.col-auto {
  margin-top: 1em;
}

.btn {
  background-color: #640064;
  color: white;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 1em;
}
.d-flex{
  max-width: 40%;
}


h2 {
  color: black;
  max-width: 60%;
  font-weight: 900;
}
.activities{
  margin-top: 2em;
}
img.media{
  width: 3em;
}

.main1 div {
  color: white;
  width: 50%;
  text-align: left;
  padding: 20px;
}

@media only screen and (max-width: 768px) {
  .hello {
    background-color: #640064;
    height: 100%;
  }
}
</style>
