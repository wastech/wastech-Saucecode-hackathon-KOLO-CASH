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

export default {
  components:{
    Success,Error

  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: #E5E5E5;
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
