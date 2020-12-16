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
       

       <div class="generatelink">
        <h3 class="head">
          Click to generate your mykollo link
        </h3>
  <div class="row mt-5">
    <div class="col-sm-3">
 <div class="card1">
          <h4>Account Donated</h4>

          <h3 class="amount">0.00</h3>
        </div>
    </div>

    <div class="col-sm-3">
 <div class="card2">
          <h5 >Amount of Donations</h5>

          <h3 class="amount">25 people</h3>
        </div>
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
  data(){
    return {
    items:[]
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
.head{
  margin-top: 2em;
  font-weight: 600;
  font-size: x-large;
  color: #858085;
}
.card1{
  background-color: #F5B1B1;
  color: #FFFFFF;
  max-width: 3;
  text-align: center;
  padding: 1.5em;
}
h5{
  font-weight: 700;
}

.card2{
  background-color: #7FCD9E;
  color: #FFFFFF;
  max-width: 3;
  text-align: center;
  padding: 1.5em;
}
.card1 h4{
  font-weight: 600;
  font-size: large;
}
.amount{
  font-weight: bold;
  font-size: xx-large;
}

</style>
