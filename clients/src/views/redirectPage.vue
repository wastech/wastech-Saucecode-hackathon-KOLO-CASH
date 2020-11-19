<template>
  <main>
    <div>

    </div>
  </main>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      message:'',
      

    }
  },
  methods:{

  },
  created(){
  axios.get(`https://kolo-cash.herokuapp.com/v1/api/user/verifyAccount/${this.$route.params.id}`)
.then(res=>{
    if (res.data.success) {
                // this.$store.commit('login_success',res)
   this.message=res.data.message || ' your account has been verified'

    }
}).catch(e=>{
   this.$store.commit("login_error",e.response)
                   this.$router.push('/login')

})


}
}
</script>
<style scoped>
.btn {
  background-color: #640064;
  color: white;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

main {
  height: 700px;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  color: black;

  font-weight: 900;
}
.button {
  margin: 0 auto;
}

main div {
  color: white;
  width: 50%;
  text-align: center;
  padding: 20px;
}
</style>