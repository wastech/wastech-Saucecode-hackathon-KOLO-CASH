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
      <div class="col-6">
      <button type="button" class="btn  btn-lg btn-block"  >
        <a href="login"> Login</a>
        </button>
      </div>
        <div class="col-6">
<button type="button" class="btn  btn-lg btn-block" >
  <a href="signup">Signup For Free </a></button>
  </div>
  </div>
   
   </div>
   
     <div class="image">
       <img src="@/assets/7.png" alt="">
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
  padding: 0.7em;
  margin: 1em;
  padding-right: 3em;
    padding-left: 3em;
}
.col-6{
  text-align: left;
  padding-left: 0em;
}
h1{
  font-size: 2.8em;
  font-weight: 700;
 margin-bottom: 0.6em;
  line-height: 61.6px;
  margin-top: 2em;
  color: #640064 !important;
}
.container{
  margin-top: 5em;
}
.btn{
  background-color: white;
}
p{
  font-size: 1.5em;
  font-weight: 100;
}
.btn-secondary {
    color: #fff;
    border-color: #6c757d;
}
.btn-outline-secondary:hover{
  background-color: white;
  
}
a:hover{
  
  color: white;
}
a{
  font-size: 0.5em;
}
img{
  max-width: 100%;
  width: 90%;
object-fit: cover;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.container{
  margin-top: 0.3em;
  max-width: 100%;
}
button{
  padding: 0.3em;
  
    font-weight: small;
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
  font-size: 0.4em;
  
}
p{
  font-size: 1em;
  font-weight: 100;
}
img{
  max-width: 100%;
  width: 100%;
  
object-fit: cover;
}
*, ::after, ::before {
     box-sizing:inherit;
}

}
</style>