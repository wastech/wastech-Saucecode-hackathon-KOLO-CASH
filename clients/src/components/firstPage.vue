<template>
  <div class="container">
    <div class="container">
  <div class="row">
    <div class="col-sm-6 ">
      <h1>{{title}}</h1>
       <div class="text">
      <p class="paragraph">
        {{text}}
      </p>
    </div>
    <div class="row">
      <div class="col-4">
      <button type="button" class="btn  btn-lg btn-block"  >
        <a href="login"> Login</a>
        </button>
      </div>
        <div class="col-4">
<button type="button" class="btn btnc  btn-lg btn-block" >
  <a href="signup">Signup For Free </a></button>
  </div>
  </div>
   
   </div>
   <div class="col-sm-6 ">
     <div class="image">
       <img src="@/assets/7.png" alt="">
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
      title:"A better way to manage your income",
      text:"Kollocash keeps you at peace when you  sell goods on credit,  Loan a friend or dare to fund a project.With an impressive interest rate.Your cash is never out of Your Kollo 😊"
    }
  }
}
</script>
<style  scoped>
button{
 
  margin: 1em;
  padding-right: 1em;
    padding-left: 1em;
}
.col-4{
  text-align: left;
  padding-left: 0em;
}
h1{
  font-size: 2em;
  font-weight: 900;
 margin-bottom: 0.6em;
  line-height: 30.6px;
  margin-top: 1em;
  color: #640064 !important;
}
.container{
  margin-top: 2em;
}
.btn{
  background-color: white;
}
p{
  font-size: 1.3em;
  font-weight: 100;
}
.btn {
    color: #fff;
    border-color: #640064;
}
button:hover{
  background-color: #640064 ;
  color: white !important;
  
}

#nav a:hover {
    font-weight: bold;
    color: white;
    font-size: 0.8em;
}
a{
  font-size: 0.5em;
}
img{
  max-width: 100%;
  width: 100%;
height: 400px;
object-fit: contain;
}


@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.container{
  margin-top: 0.3em;
  max-width: 100%;
}
button{
  padding: 0.4em;
  
  
}
.col-6{
  text-align: left;
  padding-left: 0em;
}
h1{
  font-size: 1em;
  font-weight: 900;
 margin-bottom: 0.6em;
  line-height: 30.6px;
  margin-top: 0.4em;
  color: #640064 !important;
}
a{
  font-size: 7.3px;
  
}
p{
  font-size: 1em;
  font-weight: 100;
  color: black;
}
img{
  max-width: 100%;
  width: 100%;
  height: 200px;
  display: none;
object-fit: contain;
}
*, ::after, ::before {
     box-sizing:inherit;
}

}
</style>