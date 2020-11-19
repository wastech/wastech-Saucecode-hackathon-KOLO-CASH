<template>
<div class="main">
  <div class="container">
    <div class="header">
      <h1>Why KolloCash?</h1>
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
        {title:"Meet Expense", text:'Never go out of budget! With Kollocash, you can set expenses goals with your income. Kollocash helps users meet their target through a flexible saving plan aligned with their income.'},
        {title:"Sell on Credit", text:'Business transaction  just got easier with Kollocash.  You can keep a good track on all your incoming credits or outgoing debits when you make use of Kollocash track my payments.'},
        {title:"Fund mykollo", text:'You can fundraise for a project , ask for gifts or request for payment with the use of fundmykollo link.'},


      
      ]}
  }
}
</script>

<style  scoped>

.shadow {
  padding: 1.3em;
  background-color: white;
  
}
p{
  font-size: medium;
}
.col-sm-6{
  margin-top: 1.5em;
    margin-bottom: 1.5em;
}


.main{
 background-color:   rgba(255, 249, 255, 0.85); 
 margin-top: 3em;
   margin-bottom: 4em;
}
.title{
  color:#640064;
   margin-bottom: 0.5em;
   font-weight: bolder;
   font-size: medium;

}
h1{
  color:#640064;
  padding-top: 1em;
  margin-bottom: 1em;
  text-align: center;
  font-weight: bolder;
  
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.container-fluid{
 
  max-width: 100%;
   margin-bottom: 2em;
    padding-bottom: 2em;
 
}
.main{
 background-color:   rgba(255, 249, 255, 0.85); 
 margin-top: 2em;
   margin-bottom: 2em;
}
.col-sm-6{
  margin-top: 1.5em;
    margin-bottom: 1.5em;
}
.shadow {
  padding: 2em;
  background-color: white;
  
}
.col-sm-6{
  margin-top: 1em;
}
.title{
  color:#640064;
   margin-bottom: 0.5em;
   font-weight: bolder;
   font-size: large;

}
h1{
  color:#640064;
  padding-top: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;
  font-weight: bolder;
  font-size: larger;
  
}
}
</style>