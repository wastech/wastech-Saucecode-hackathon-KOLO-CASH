<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <a class="navbar-brand">
      <router-link to="/">KolloCash</router-link>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav ">
      <li class="nav-item active  " v-if="isLoggedIn">
        <a class="nav-link" href="trackpayment">Track Payment <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" v-if="isLoggedIn">
        <a class="nav-link" href="trackpayment" >Fund myKollo</a>
      </li>

       <li class="nav-item">
        <a class="nav-link" href="#" v-if="isLoggedIn" >Loan Pal</a>
      </li>

       <li class="nav-item">
        <a class="nav-link" href="#">FAQ</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Learn</a>
      </li>
    
    </ul>
    </div>
  </nav>
</div>

</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
 created(){
 },
 computed:{
   ...mapGetters(["isLoggedIn"])
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
ul {
  margin: 0 auto;
  color: black;
  font-weight: bolder;
  padding: 2rem;
  font-size: 1em;
}

nav{
  background-color: #FCFBFC !important; 

}
.nav{
  align-items: flex-end;
}
button{
  
  padding-right: 3em;
    padding-left: 3em;
}
.navbar-brand{
  font-weight: bolder;
  font-size: xx-large;
 
}

#nav a{
 color: black;
}
button:hover{
  
    background-color: #640064 !important;
   
}
#nav a.router-link-exact-active {
    color: #640064 !important;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.navbar-brand{
  font-weight: bolder;
  font-size: medium;
 
}
#nav a{
 font-size: large;
 text-align-last: left;
}
button[data-v-1f8f859e] {
     padding-right: 1em; 
     padding-left: 1em; 
}
.navbar-light .navbar-toggler {
    color: rgba(0,0,0,.5);
     border-color:none;
  
}
button:hover{
  
    background-color: #E5E5E5 !important;
    border-color: #E5E5E5;
   
}
.nav-link {
    display: block;
     padding: 0.3em;
}
.navbar-light .navbar-toggler {
   
    border-color:#E5E5E5
}
*, ::after, ::before {
    box-sizing:unset; 
}
container-fluid{
  max-width: 100%;
}
}

</style>