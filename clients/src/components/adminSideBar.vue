<template>
   <div class="main">
        <div class="title">
      <h3> <i class="fas fa-bars"></i> <a href="/">  kolloCash </a></h3>
      </div>

      <div class="list">
        <p> <i class="fas fa-home">  </i> <a href="/">  Home</a> </p>
        <p> <i class="fas fa-route"></i>Start a Goal</p>
        <p> <i class="fas fa-funnel-dollar"></i>Fund a Goal</p>
       
        <p> <i class="far fa-user"></i>Account</p>


      </div>

      <div class="logout">
       <p> <i class="fas fa-sign-out-alt"></i> Logout</p>
      </div>
   </div>
</template>
<style scoped>


h5{
  margin-top: 6em;
  text-align: center;
}
#nav a:hover{
  color:#640064;
  background-color: white;
  padding: 0.8em;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
#nav a{
  color: white;
}

.title {
  color: white;
  text-align: left;
  margin-left: 2em;
  margin-top: 2em;
  padding: 0em;
}

.fas, .far{
  color: white;
  margin-right: 1.5em;
}
.list{
  color: white;
  text-align: left;
  margin-top: 3em;
   margin-left: 2em;
   padding: 0em;
}
.logout{
   color: white;
  text-align: left;
  margin-top: 3em;
   margin-left: 2em;
   padding: 0em;
}
h3{
  font-size: large;
}

</style>