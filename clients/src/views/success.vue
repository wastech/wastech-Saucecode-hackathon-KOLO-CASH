<template>
    <div>
       
      <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="success">
  <h3 class="success">{{success}}</h3>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        success(){
            return this.$store.getters.success
        }
    },
     watch:{
        '$store.getters.success'(){
            if(this.$store.getters.success) {

                setTimeout((req,res,next)=>{
                this.$store.state.success=''
                },6000)
            }
        }
    }
   
}
</script>

<style scoped>



@media only screen and (max-width: 768px) {
  /* For mobile phones: */
h3{
    font-size: small;
}
}
</style>