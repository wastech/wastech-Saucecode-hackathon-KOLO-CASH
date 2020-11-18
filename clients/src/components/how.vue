<template>
<div class="main">
  <div class="container-fluid">
    <div class="header">
      <h1>Why myKollo?</h1>
    </div>
  <div class="row">
    <div class="col-sm-6" v-for="item in items" :key="item.id">
      <div class="shadow ">
       <h2 class="title"> {{item.title}}</h2>
       <div class="paragraph">
         <p>{{item.text}}</p>
       </div>
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
        {title:"Choose a Goal", text:'With the use of mykollo ID. Kollocash ensures that money set to be borrowed to a Kollo user is tracked and retrieved at the set time. You are never at lost when a borrower do not pay at the set time. Keep calm while you loan to grow your kollo cash'},
        {title:"Choose a Goal", text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'},
        {title:"Choose a Goal", text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'},
        {title:"Choose a Goal", text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'},


      
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
.shadow {
  padding: 4em;
  background-color: white;
  
}
.col-sm-6{
  margin-top: 1.5em;
}


.main{
 background-color:   rgba(255, 249, 255, 0.85); ;
}
.title{
  color:#640064;
   margin-bottom: 0.5em;
   font-weight: bolder;

}
h1{
  color:#640064;
  padding-top: 3em;
  margin-bottom: 2em;
  text-align: center;
  font-weight: bolder;
  
}
</style>