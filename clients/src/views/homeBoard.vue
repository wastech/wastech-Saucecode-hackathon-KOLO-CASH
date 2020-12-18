<template>
  <div class="main">
    <div class="row">
      <div class=" col-sm-3">
       <sb/>
      </div>

      <div class="col-sm-9">
        <div class="container row">
          <div class="col-auto mr-auto">
            <div class="name">
              <h1>{{user.firstName}}   {{user.lastName}}</h1>
              <span>good morning, please have a breakfast</span>
            </div>
          </div>
          <div class="col-auto">
            <div class="image">
              <img :src="user.photoURL" alt="your profile picture" />
              
            </div>
          </div>
        </div>

        <div class="border">
          <h3>Account balance</h3>
          <h3>N0.00</h3>
        </div>

        <div class="getStarted">
          <h1>Get Started</h1>
        </div>

        <div class="container row ss">
          <div class="shadow col-sm-3 hey">
            <h5>Fund Your Account</h5>
          </div>
          <div class="shadow col-sm-3 col-xs-12 hey1">
            <h5>Track Payments</h5>
          </div>
          <div class="shadow col-sm-3 col-xs-12 hey2">
            <h5>Fund myKollo Link</h5>
          </div>
        </div>
        
 <div class="recentActivities mb-5">
  
<h3 class="head">
        Recent activities
        </h3>
 <div class="recentb">
        <div class="d-flex justify-content-between ">
 <span class="shortname">Da</span>
 <h6 class="mt-2"> aremu is  is asking for a loan</h6>
 <span type="" class="view  mt-2" style="color:#006400; font-weight:bold;">view</span>
 <span type="" class="delete mt-2"  style="color:#CB3939; font-weight:bold;" >delete</span>

        </div>
          <div class="d-flex justify-content-between ">
 <span class="shortname">Da</span>
 <h6 class="mt-2"> aremu is  is asking for a loan</h6>
 <span type="" class="view  mt-2" style="color:#006400; font-weight:bold;">view</span>
 <span type="" class="delete mt-2"  style="color:#CB3939; font-weight:bold;" >delete</span>

        </div>
          <div class="d-flex justify-content-between ">
 <span class="shortname">Da</span>
 <h6 class="mt-2"> aremu is  is asking for a loan</h6>
 <span type="" class="view  mt-2" style="color:#006400; font-weight:bold;">view</span>
 <span type="" class="delete mt-2"  style="color:#CB3939; font-weight:bold;" >delete</span>

        </div>
 </div></div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"

import sb from "../components/sb"
import axios from "axios"
export default {
  data(){
    return{
    }
  },
  methods:{
},
  components:{
    sb
  },
   computed:{
        user(){
            return this.$store.getters.user
        }
    },
  created(){
  }
}
</script>

<style scoped>
.recentActivities{
  
}
.shortname{
  background-color: #640064;
  padding: 0.5em;
  border-radius: 50%;
  color: white;
}
.recentb {
 border: 2px solid #000000;
 
  
}
.d-flex{
 max-width: 60%;
 margin-top: 1em;
}

.hey {
  background-color: #875019;
}
.hey1 {
  background-color: #006400;
}
.hey2 {
  background-color: #003264;
}
.shadow {
  margin-left: 2em;
  max-width: 50%;
  height: 7em;
  width: 70%;
  color: white;
  margin-top: 3em;
}
h1.getStartted {
  font-size:x-large;
  font-weight: bold;
}
h5 {
  margin-top: 4em;
  text-align: center;
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
.title {
  color: white;
  text-align: left;
  margin-left: 2em;
  margin-top: 2em;
  padding: 0em;
}
.getStarted {
  margin-top: 1em;
}
.fas,
.far {
  color: white;
  margin-right: 1.5em;
}
#nav a:hover {
  color: #640064;
  background-color: white;
  padding: 0.8em;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
#nav a {
  color: white;
}

.list {
  color: white;
  text-align: left;
  margin-top: 3em;
  margin-left: 2em;
  padding: 0em;
}
.border {
  padding: 1em;
  border: 1px solid #640064 !important;
  max-width: 25%;
  margin-top: 1.5em;
  border-top-right-radius: 1em;
  border-bottom-left-radius: 1em;
  color: white;
  font-weight: bolder;
  background-color: #640064;
  text-align: center;
  font-size: large;
}
p {
  font-size: small;
}
h2 {
  font-size: large;
}
.logout {
  color: white;
  text-align: left;
  margin-top: 4em;
  margin-left: 2em;
}
.head{
  margin-top: 2em;
  font-weight: 600;
  font-size: x-large;
  color: #858085;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.hello{
  background-color:#640064;
  height: 34em;
  display: none;
}
img{
  width: 20%;
  border-radius: 50%;
  object-fit: contain;
  height: 100px;
  display: none;
}
.border{
  padding: 1em;
  border: 1px solid #640064 !important;
  max-width: 80%;
  margin-top: 1.5em;
  border-top-right-radius: 1em;
  border-bottom-left-radius: 1em;
  color: #640064;
  font-weight: medium;
  margin: 0 auto;
  text-align: center;
}
h2{
  font-size: medium;
  font-weight: bolder;

}
h1{
  font-size: x-large;
}
.shadow {
 margin-left: 2em;
  max-width: 100%;
  
  width: 100%;
  color: white;
  margin-top: 1em;
 
  
 
 
}
.ss{
  margin-bottom: 2em;
}
}
</style>