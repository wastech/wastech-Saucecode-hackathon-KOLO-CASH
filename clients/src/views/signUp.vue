<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <img src="@/assets/1.png" alt="" />
      </div>
      <div class="col-sm">
        <div class="title">
          <h1>Create an Account</h1>

          <form @submit.prevent="SignUp">
            <div class="form-row">
              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="First name"
                   v-model="firstName"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Last name"
                  v-model="lastName"
                />
              </div>
            </div>

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
                  type="number"
                  class="form-control form-control-lg"


                  id="inputPassword3"
                  placeholder="phone Number"
                  v-model="phone_number"
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
            <div class="form-group row">
              <div class="col-sm-12">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="inputPassword3"
                  placeholder="confirm password"
                  v-model="confirm_password"

                />
              </div>
            </div>

            <div class="d-flex justify-content-around mt-2">
              <h5>got an account? <a href="login"><code> login</code></a></h5>
              <!-- <button type="button" class="btn btn-secondary btn-lg btn-lg">
              </button> -->
                <button  type="submit" class="btn btn-secondary btn-lg btn-lg">
                continue
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
      firstName:'',
      lastName:'',
      email:'',
      confirm_password:'',
      password:'',
      phone_number:'',
    }
    },
    
    methods:{
        ...mapActions(['signUp']),
        SignUp(){
            let userInfo={
                firstName:this.firstName,
                lastName:this.lastName,
                confirm_password:this.confirm_password,
                password:this.password,
                phone_number:this.phone_number,
                email:this.email
            }

  // this.signUp(userInfo)
  axios.post('https://kolo-cash.herokuapp.com/v1/api/user/register',userInfo)
.then(res=>{
    if (res.data.success) {
         this.$store.commit('register_success',res)
        // this.$router.push('/redirectpage')
    console.log(res.data.message)
    }
}).catch(e=>{
   this.$store.commit("register_error",e.response)
})
            },
            
  }
}
</script>
<style scoped>
.container {
  padding-top: 1em;
  padding-bottom: 1em;
 
}
.btn-secondary {
  color: #fff;
  background-color: #640064 !important;
  border-color: #6c757d;
}
input {
  padding: 1em;
  margin-top: 0.1em;
  border-color: #640064 !important;

}
img{
height: 400px;
  width: 100%;
  object-fit: contain;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
img{
  width: 100%;
  display: none;
  object-fit: cover;
}
input {
  padding: 0.5em;
  margin-top: 0.3em;
  border-color: #640064 !important;

}
h1{
  margin-top: 1em;
  font-size: large;
}
.container {
  padding-top: 0em;
  padding-bottom: 0em;

}
form{
  margin-bottom: 2em;
}
h5{
  font-size: small;
}
}
</style>
