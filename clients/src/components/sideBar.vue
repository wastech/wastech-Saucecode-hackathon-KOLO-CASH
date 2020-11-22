<template>
   <div class="main">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse flex-column" id="navbarSupportedContent">
        <div class="title">
      <h3> <i class="fas fa-bars"></i>  kolloCash</h3>
      </div>

      <div class="list">
        <p> <i class="fas fa-home"></i>Home </p>
        <p> <i class="fas fa-route"></i>Track Payments</p>
        <p> <i class="fas fa-funnel-dollar"></i>Fund myKollo Link</p>
        <p> <i class="fas fa-receipt"></i>Loan a Friend</p>
        <p> <i class="far fa-user"></i>Account</p>


      </div>

      <div class="logout">
       <p> <i class="fas fa-sign-out-alt"></i> Logout</p>
      </div>
        </div>
      </nav>
   </div>
</template>
<style scoped>


h5{
  margin-top: 6em;
  text-align: center;
}

.title {
  color: white;
  text-align: left;
  margin-left: 1em;
  margin-top: 2em;
  padding: 0em;
}

.fas, .far{
  color: white;
  margin-right: 1.5em;
}
h3{
  font-size: large;
}

.list{
  color: white;
  text-align: left;
  margin-top: 2em;
   margin-left: 1em;
   padding: 0em;
   font-size: small;
   font-weight: 600;
}
.logout{
   color: white;
  text-align: left;
  margin-top: 2em;
   margin-left: 0.3em;
   padding: 0em;
   font-size: large;
}

</style>