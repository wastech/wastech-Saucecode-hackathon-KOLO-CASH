<template>
<div class="main">
 <div  >
  <div class="row">
    <div class="col-3 ">
      <h3>KolloCash</h3>
    </div>

<div class="col-7">
  <div class="row">
    <div class="col-sm-3"><span>Track Payment</span></div>
     <div class="col-sm-3"><span>Fund my kollo</span></div>
      <div class="col-sm-2"><span>Loan Pal</span></div>
       <div class="col-sm-2"><span>FAQ</span></div>
       <div class="col-sm-2"><span>Learn</span></div>
  </div>
</div>


   
    <div class="col-1">
     <div class="row">
       <div class="col-sm-3"><i class="fab fa-facebook-f"></i></div>
      <div class="col-sm-3"><i class="fab fa-twitter"></i></div>
       <div class="col-sm-3"><i class="fas fa-home"></i></div>
     </div>
    </div>
     </div>
 </div>
</div>
</template>

<style  scoped>
.main{
  background-color: #2C022C !important;
  padding: 1em;
  color: white;
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
}

.container-fluid{
  max-width: 100%;
  width: 100%;
  margin-top: 1em;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.main{
 
  padding: 0em;
  color: white;
 position: unset;
   left: 0;
   bottom: 0;
   width: 100%;
     max-width: 100%;
}
.row{
 background-color: #2C022C !important;
}
.col-3{
  text-align: left;
  margin-top: 3em;
}
.col-7{
  text-align: center;
  padding: 0em;
}
.col-1{
  text-align: center;
  margin-top: 2em;
}
.fas{
  margin-bottom: 1em;
}
.container-fluid{
  max-width: 100%;
}
.row{
  padding: 0.1em;
}


h3{
  font-size: small;
  font-weight: bolder;
}
h1{
  font-size: medium;
}
}
</style>