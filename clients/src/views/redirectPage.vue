<template>
  <main>
    <div>

    </div>
  </main>
</template>
<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default {
  data(){
    return{
      message:'',
      

    }
  },
  methods:{
      ...mapActions(['confirmuser']),

   confirmUser(){
     this.confirmuser(this.$route.params.id)
   }
  },
  created(){
    this.confirmUser()
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