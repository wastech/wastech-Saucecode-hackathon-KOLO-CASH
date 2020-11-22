<template>
  <div class="">
    <div class="row mt-5 mb-5">
     
        
<div class="col-sm-2 clx">
  <adminSideBar/>
</div>

 <!-- form -->
      <div class="col-sm-8">

        <div class="username">
          <h1>Peace’s Account</h1>
        </div>
     <div class="container row yey">
          <div class="col-5">
            <div class="name">
              <h4>Change Profile Picture,</h4>
              <span>Choose a new profile picture</span>
            </div>
          </div>
          <div class="col-4">
            <div class="image">
              <img src="@/assets/7.png" alt="" />  <br>
              <span>change image</span>
            </div>
          </div>
        </div>

      <form>
        <div class="form">
  <div class="row">
    <label for="inputEmail3" class="col-md-2 col-form-label">Full Name</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" placeholder="First name">
    </div>
    <div class="col-sm-5">
      <input type="text" class="form-control" placeholder="Last name">
    </div>
  </div>

 <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">username</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="inputPassword">
    </div>
  </div>

 <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Gender</label>
  <div class=" col-sm-2 form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">male</label>
</div>
<div class=" col-sm-2 form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">female</label>
</div>
 </div>

 <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Date of Birth</label>
    <div class="col-sm-5">
      <input type="date" class="form-control" id="inputPassword">
    </div>
  </div>
<div class="button">

<button type="button" class="btn btn-secondary mt-3">Save Changes</button>

</div>

  </div>
  
</form>

      </div>
    </div>
  </div>
</template>
<script>
import adminSideBar from '@/components/adminSideBar.vue'
export default {
  components:{
    adminSideBar
  }
}
</script>

<style scoped>

.clx {
  background-color: #640064 !important;
  height: 40em;
  color: white;
}
.button{
  text-align: center;
  
}
.yey{
  margin-top: 3em;
  margin-bottom: 2em;
}
.btn{
   background-color: #640064 !important;
   border-top-right-radius: 1.3em;
   border-bottom-left-radius: 1.3em;
   padding: 0.5em;
}

img {
  width: 20%;
  border-radius: 50%;
  object-fit: contain;
  height: 40px;
}
.image {
  text-align: left;
}
span{
  font-size: small;
}

.form-group{
  margin-top: 1em;
}
input{
  padding: 0.6em;
}

.col-sm-3 {
  margin-right: 2em;
}
h3 {
  margin-top: 1em;
}
h4{
  font-size: large;
  font-weight: 700;
}

.title {
  padding: 0.1em;
}
label{
  font-size: 1.2em;
  font-weight: small;
}
.title:hover {
  color: #640064;
  border: 2px solid white;
  background-color: #e5e5e5;
  border-top-right-radius: 3em;
  border-bottom-left-radius: 3em;
}
.account {
  border: 1px solid #640064;
  max-width: 20%;
  color: #640064;
  font-weight: 600;
  text-align: center;
  padding: 2em;
}
h5 {
  margin-top: 6em;
  text-align: center;
}
.started h1 {
  margin-bottom: 2em;}
.d-flex{
  margin-top: 1.5em;
  max-width: 60%;
  margin-bottom: 2em;
}
.img img{
  max-width: 10%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.container{
  text-align: left;
}
.form{
  max-width: 80%;
}
</style>