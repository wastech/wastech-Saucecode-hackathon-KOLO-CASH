<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <div class="image">
          <img
           src="@/assets/4.png"
            alt=""
          />
        </div>
      </div>

      <div class="col-sm-6">
        <h1>{{ title }}</h1>
        <div class="text">
          <p class="paragraph">
            {{ text }}
          </p>
        </div>
        <button type="button" class="btn btn-outline-secondary">login</button>
        <button type="button" class="btn btn-secondary btn-lg btn-lg">
          signup for free
        </button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      title: "Sign Up for Free",
      text: "Start Saving for Goal",
    };
  },
};
</script>
<style  scoped>
button {
  padding: 0.7em;
  margin: 1em;
  padding-right: 3em;
  padding-left: 3em;
}
h1 {
  font-size: normal;
  font-weight: 900;
  size: 56px;
  line-height: 61.6px;
  color: #640064 !important;
}
.container {
  margin-top: 7em;
  margin-bottom: 7em;
}
p {
  font-size: 4em;
  font-weight: 100;
}
.btn-secondary {
  color: #fff;
  background-color: #640064 !important;
  border-color: #6c757d;
}
img {
  max-width: 100%;
  width: 100%;
}
.btn-secondary {
    color: #fff;
    background-color: #640064 !important;
    border-color: #6c757d;
}
</style>