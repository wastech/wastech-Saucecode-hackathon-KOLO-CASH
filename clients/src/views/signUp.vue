<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <img src="@/assets/1.png" alt="" />
      </div>
      <div class="col-sm">
        <div class="title">
          <h1>Create an Account</h1>

          <form>
            <div class="form-row">
              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="First name"
                />
              </div>
              <div class="col-sm-6">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div class="form-group row mt-2">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control form-control-lg"
                  id="inputEmail3"
                  placeholder="email address"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <input
                  type="number"
                  class="form-control form-control-lg"
                  id="inputPassword3"
                  placeholder="phone Number"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="inputPassword3"
                  placeholder="password"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-12">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  id="inputPassword3"
                  placeholder="confirm password"
                />
              </div>
            </div>

            <div class="d-flex justify-content-around">
              <h3>got an account? <code>Login</code></h3>
              <button type="button" class="btn btn-secondary btn-lg btn-lg">
                signup for free
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding-top: 6em;
  padding-bottom: 6em;
  background-color: #e5e5e5 !important;
}
.btn-secondary {
  color: #fff;
  background-color: #640064 !important;
  border-color: #6c757d;
}
input {
  padding: 2em;
  margin-top: 0.6em;
}
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
