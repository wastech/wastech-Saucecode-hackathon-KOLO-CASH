<template>
<div class="main">
  <div class="container-fluid">
    <div class="header">
      <h1>how myBank Works</h1>
    </div>
  <div class="row">
    <div class="col-sm-4" v-for="item in items" :key="item.id">
      <div class="card">
       <h2 class="title"> {{item.title}}</h2>
      </div>
    </div>
   
   
  </div>
</div>
</div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {title:"Choose a Goal"},
        {title:"Select Time Duration"},
         {title:"Gain Interest"}
      
      ]}
  }
}
</script>

<style  scoped>
.container-fluid{
  margin-top: 5em;
  max-width: 80%;
   margin-bottom: 5em;
    padding-bottom: 7em;
 
}

.card{
  height: 30em;
 
}
.main{
 background-color:   rgba(255, 249, 255, 0.85); ;
}
.title{
  padding: 1.5em;
}
h1{
  color:#640064;
  padding-top: 3em;
  margin-bottom: 2em;
  
}
</style>