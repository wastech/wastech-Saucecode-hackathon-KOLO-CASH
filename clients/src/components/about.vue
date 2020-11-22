<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <img
         src="@/assets/6.png"
          alt=""
        />
      </div>
      <div class="col-sm-6">
        <div class="title">
          <h1>Shara Ojo</h1>
        </div>
        <div class="text">
          <p>
          
           Selling on credit or loaning out my cash to friends as never
been a a good option because I always deal with the untimely retrievals.
Kollocash has made transaction easier, saver and peaceful. </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  margin-bottom: 5em;
}
.title{
  margin-top: 5em;
}
p{
 
  width: 90%;
  color: black;
  font-size: 1.4em;
}

img{
  max-width: 95%;
  width: 100%;

object-fit: cover;

}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
.container{
  margin-bottom: 1em;
}
img{
   margin-top: 0.5em;
  max-width: 100%;
  width: 100%;

object-fit: cover;

}
.title{
  margin-top: 1em;
  font-size: medium;
}
p{
 
  width: 100%;
  color: black;
  font-size: medium;
}
}
</style>