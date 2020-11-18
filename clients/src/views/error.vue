<template>
    <div >

<div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
  <h1 class="error">{{error}}</h1>
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
        error(){
            return this.$store.getters.error
        }
    },
    watch:{
        '$store.getters.error'(){
            if(this.$store.getters.error) {
                setTimeout((req,res,next)=>{
                this.$store.state.error=''
                },6000)
            }
        }
    }
}
</script>

<style scoped>
.error{
    text-align: center;
}
.red{
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