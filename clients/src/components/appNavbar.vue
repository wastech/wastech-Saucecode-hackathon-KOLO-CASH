<template>
<div class="hello">
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <a class="navbar-brand">
      <router-link to="/">myKollo</router-link>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="nav ">
      <li class="nav-item active  ">
        <a class="nav-link" href="#">Track Payment <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Fund myKollo</a>
      </li>

       <li class="nav-item">
        <a class="nav-link" href="#">Learn Pal</a>
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
export default {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
ul {
  margin: 0 auto;
  color: black;
  font-weight: bolder;
  padding: 2rem;
  font-size: 1.5em;
}

nav{
  background-color: #E5E5E5 !important;

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
  font-size: xxx-large;
 
}

#nav a{
 color: #640064;
}
button:hover{
  
    background-color: #640064 !important;
   
}
#nav a.router-link-exact-active {
    color: #640064 !important;
}

</style>