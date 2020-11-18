<template>
  <div class="container ">
    <div class="container">
  <div class="row">
    <div class="col-sm-6 ">
      <h1>{{title}}</h1>
       <div class="text">
      <p class="paragraph">
        {{text}}
      </p>
    </div>
      <button type="button" class="btn btn-outline-secondary"  >
        <a href="login"> Login</a>
        </button>
<button type="button" class="btn btn-outline-secondary btn-lg btn-lg" >
  <a href="signup">Signup For Free </a></button>
  </div>
   
    <div class="col-sm-6">
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
      text:"Kolocash keeps you at peace when you  sell goods on credit,  Loan a friend or dared to fund a project.With an impressive interest rates.Your cash is never out of Your Kollo 😊"
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
p{
  font-size: 1.5em;
  font-weight: 100;
}
.btn-secondary {
    color: #fff;
    border-color: #6c757d;
}
.btn-outline-secondary:hover{
  background-color: #640064;
}
img{
  max-width: 100%;
  width: 936px;
left: 514px;
top: 219px;
object-fit: cover;
}
</style>