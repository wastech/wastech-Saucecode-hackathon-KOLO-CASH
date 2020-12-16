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
        <h5 class="head">Recent activities</h5>

<div class="media position-relative mb-4" v-for="item in items" :key="item.id">
  <span class="mr-4">{{item.name}}</span>
  <div class="media-body">
    <h5 class="mt-0">{{item.activity}}  <code >N {{item.amount}}</code> <span style="color:#006400;">{{item.recieve}}</span></h5>
  </div>
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
  data(){
    return {
    items:[
      {name:'Da', activity:' Aremu just sent you ', recieve:'3000'},
      {name:'Da', activity:'you just  sent David Attah', amount:'3000'},
      {name:'Da', activity:'you sent', recieve:'3000'},
      {name:'Da', activity:'you sent', amount:'3000'},
      {name:'Da', activity:'you sent', recieve:'3000'}
    ]
    }
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
code{
  margin-left: 1em;
}

.btn {
  background-color: #640064;
  color: white;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 1em;
}
.mt-0, .my-0 {
    margin-top: 0!important;
    padding: 0.5em;
}
 .mr-4{
  border-radius: 50%;
  width: 3.5em;
  color: white;
  padding: 1em;
  background-color: #B600B6;
}


.head {
  color: #858085;
  margin-top: 1em;
  margin-bottom: 1em;
  font-weight: 600;
}
.activities{
  margin-top: 2em;
  margin-left: 1em;
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
