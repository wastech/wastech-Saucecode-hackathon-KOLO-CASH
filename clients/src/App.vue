<template>
  <div id="nav">
   <appNavbar/>
  <Success  />
  <Error  />
    <router-view/>
    <footerApp/>
  </div>
 
</template>
<script>
import appNavbar from "@/components/appNavbar"
import footerApp from "@/components/footerApp"
import Success from "@/views/success"
import Error from "@/views/error"
import axios from "axios"
import Api from "./config/Api"
import {mapActions} from "vuex";

export default {
  components:{
    Success,Error, appNavbar, footerApp
  },
  methods:{
    
    ...mapActions(["fetchProfile"]),

fetchprofile(){
  this.fetchProfile()
},
   init(){
     Api().get('/users/init')
     .then(res=>{
       console.log(res)
     })
     .catch(e=>{
       console.log(e.response.data)

     })


   }
  },
  created(){
         if (  this.$store.state.token===localStorage.getItem('token')   ) {
        this.fetchprofile()
      }else{
      }
      // this.init()
 
},
watch:{
  
    '$store.state.token'(newVal,oldVal){
      if (  this.$store.state.token===localStorage.getItem('token')   ) {
        this.fetchProfile()
      }else{

      }
     
    },

}
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ;


}
html, 
body {
   
    background-color: #FCFBFC
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
