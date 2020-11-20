<template>
  <div class="home">
  
  <firstPage/>
  <how/>
  <about/>
 
  </div>
</template>

<script>
// @ is an alias to /src
import firstPage from '@/components/firstPage.vue'
import how from '@/components/how.vue'
import about from '@/components/about.vue'





export default {
  name: 'Home',
  components: {
   firstPage,
   how,
   about,
  
  }
}
</script>
<style scoped>
.home{
  max-width: 100%;
  width: 100%;
}
@media only screen and (max-width: 768px) {
 .home{
  max-width: 100%;
  width: 100%;
}
}
</style>
