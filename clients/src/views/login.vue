<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <img src="@/assets/9.png" alt="" />
      </div>
      <div class="col-sm">
        <div class="title">
          <h4>Welcome Back,<br>  Sign to Continue</h4>

          <form @submit.prevent="SignIn">
            <div class="form-group row mt-2">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control form-control-lg"
                  id="inputEmail3"
                  placeholder="email address"
                   v-model="email"

                />
              </div>
            </div>
          
            <div class="form-group row">
              <div class="col-sm-12">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="inputPassword3"
                  placeholder="password"
                   v-model="password"
                />
              </div>
            </div>
          <div class="forgot">
            <h3>forgot password </h3>
          </div>

            <div class="d-flex justify-content-between">
              <h5>don't have an account? <span><a href="signup">signup  </a></span> </h5>
              <button type="submit" class="btn btn-secondary btn-lg btn-lg">
                login
              </button>

              
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import Api from '../config/Api'
import axios from 'axios'

export default {
  data(){
    return{
      email:'',
      password:'',
    }
    },
    
    methods:{
        ...mapActions(['signIn']),
        SignIn(){
            let userInfo={
                password:this.password,
                email:this.email
            }
            this.signIn(userInfo)
            },
            
  }
}
</script>

<style scoped>
.container {
  padding-top: 5em;
 
  
 
}
.btn-secondary {
  color: #fff;
  background-color: #640064 !important;
  border-color: #6c757d;
}
h4{
  color: #640064;
  font-weight: 900;
  
}
.d-flex{
  margin-top: 1.5em;
}
.forgot{
  margin-bottom: 1em;
   color: #640064;
   font-size: medium;
}
#nav a{
  color: #640064;
  font-size: 1em;
}
input {
  padding: 0.2em;
  margin-top: 0.6em;
    border-color: #640064 !important;
}

img{
  height: 300px;
  width: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.container {
  padding-top: 1em;
  padding-bottom: 1em;
 
}
img{
  height: 300px;
  width: 100%;
  display: none;
  object-fit: cover;
}
input {
  padding: 1em;
  margin-top: 0.3em;
    border-color: #640064 !important;
}
h5{
  font-size: small;
}
h1{
  color: #640064;
  font-weight: bolder;
  font-size: x-large;
}
#nav a{
  color: #640064;
  font-size: 1.5em;
}
.d-flex{
  margin-top: 3em;
}

}
</style>
