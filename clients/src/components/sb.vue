<template>
      <div class="main">
        <div class="title">
          <h2><i class="fas fa-bars"></i> <a href="/"> kolloCash</a></h2>
        </div>

        <div class="list">
          <p><i class="fas fa-home"></i> <a href="/"> Home </a></p>
          <p>
            <i class="fas fa-route"></i>
            <a href="trackpayment">Track Payments</a>
          </p>
          <p>
            <i class="fas fa-funnel-dollar"></i>
            <a href="trackpayment">Fund myKollo Link</a>
          </p>
          <p>
            <i class="fas fa-receipt"></i>
            <a href="trackpayment">Loan a Friend</a>
          </p>
          <p><i class="far fa-user"></i> <a href="account"> Account</a></p>
        </div>

        <div class="logout " @click="logOut">
          <p ><i class="fas fa-sign-out-alt" ></i> Logout</p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  data(){
    return{

    }
  },
methods:{
   ...mapActions(["signOut"]),
logOut(){
this.signOut()
}
},
}
</script>
<style scoped>
.hello {
  background-color: #640064;
  height: 34em;
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
h1 {
  font-size: xxx-large;
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
  color: #640064;
  font-weight: bolder;
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