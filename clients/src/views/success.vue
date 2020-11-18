<template>
    <div>
       
      <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="success">
  <h1 class="error">{{success}}</h1>
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
.blue{
    border-radius: 5px;
    font-size: 3vh;
    margin: 20px ;
    text-transform: uppercase;
}
div.red{
    margin: 0px;
    padding: opx;
}
</style>