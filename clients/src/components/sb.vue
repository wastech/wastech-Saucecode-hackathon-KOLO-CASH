<template>
  <div class="main">
    <div class="title">
      <h2><i class="fas fa-bars"></i> <a href="/"> kolloCash</a></h2>
    </div>

    <div class="list">
      <p><i class="fas fa-home"></i> <a href="/"> Home </a></p>
      <p>
        <i class="fas fa-route"></i>
        <a data-toggle="modal" data-target="#exampleModal">Track Payments</a>
      </p>
      <p>
        <i class="fas fa-funnel-dollar"></i>
        <a href="trackpayment">Fund myKollo Link</a>
      </p>
      <p>
        <i class="fas fa-receipt"></i>
        <a href="trackpayment">Loan a Friend</a>
      </p>
      <p><i class="far fa-user"></i> <a href="account"> Account</a></p>
    </div>

    <div class="logout" @click="logOut">
      <p><i class="fas fa-sign-out-alt"></i> Logout</p>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <h2 class="modal-title" id="exampleModalLabel">
            enter amount you would put in your kollo
          </h2>

          <div class="body">
            <form>
              <div class="form-row">
                <div class="col-sm-12">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Amount e.g #50000.00"
                  />
                </div>
              </div>
            </form>
          </div>

          <div class="btnn">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              proceed
            </button>
          </div>
        </div>
      </div>
    </div>


    <div
      class="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <h2 class="modal-title" id="staticBackdropLabel">
            enter amount you would put in your kollo
          </h2>

          <div class="body">
            <h4><i class="fas fa-credit-card"></i> pay with <b>card</b></h4>
          </div>
          <div class="btnn">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#staticBackdrop1"
            >
              proceed
            </button>
          </div>
        </div>
      </div>
    </div>


    <div
      class="modal fade"
      id="staticBackdrop1"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <h2 class="modal-title" id="staticBackdropLabel">
            how would you like to found your kollo Cash
          </h2>

          <div class="body">
            <select class="custom-select custom-select-lg mb-3">
              <option selected>
                <h4>
                  <i class="fas fa-credit-card" style="color: red"></i> pay with
                  <b>card</b>
                </h4>
              </option>
              <option value="1">Stripe</option>
              <option value="2">Paypal</option>
              <option value="3">Payhoneer</option>
            </select>
          </div>
          <div class="btnn">
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#staticBackdrop2"
            >
              proceed
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="staticBackdrop2"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <h2 class="modal-title" id="staticBackdropLabel">
            how would you like to found your kollo Cash
          </h2>

          <div class="modal-body">
            <form>
              <div class="form-row">
                <input
                  type="number"
                  class="form-control mb-3"
                  placeholder="card number"
                />
                <div class="col">
                  <input
                    type="number"
                    class="form-control"
                    placeholder=" cvv"
                  />
                </div>
                <div class="col">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="expiry date"
                  />
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#staticBackdrop3"
            >
              proceed
            </button>
            
          </div>
        </div>
      </div>
    </div>

     <div
      class="modal fade"
      id="staticBackdrop3"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabe2"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <h2 class="modal-title">
           <i class="far fa-check-circle"></i>
          </h2>

          <div class="body">
            <h3> Your Kollo Cash account has been sucessfuly funded</h3>
          </div>
          <div class="btnn">
            <a href="/"> <button
              type="button"
              class="btn btn-primary "
             
            >
              Back to Home
            </button></a> 
          </div>
        </div>
      </div>
    </div>
    


  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["signOut"]),
    logOut() {
      this.signOut();
    },
  },
};
</script>
<style scoped>
.hello {
  background-color: #640064;
  height: 34em;
}
.hey {
  background-color: #875019;
}
.hey1 {
  background-color: #006400;
}
.hey2 {
  background-color: #003264;
}
.shadow {
  margin-left: 2em;
  max-width: 50%;
  height: 7em;
  width: 70%;
  color: white;
  margin-top: 3em;
}
h1 {
  font-size: xxx-large;
}
h5 {
  margin-top: 4em;
  text-align: center;
}
img {
  width: 20%;
  border-radius: 50%;
  object-fit: contain;
  height: 100px;
}
.image {
  text-align: right;
}
.col-auto {
  margin-top: 1em;
}
.title {
  color: white;
  text-align: left;
  margin-left: 2em;
  margin-top: 2em;
  padding: 0em;
}
.getStarted {
  margin-top: 1em;
}
.fas,
.far {
  color: white;
  margin-right: 1.5em;
}
#nav a:hover {
  color: #640064;
  background-color: white;
  padding: 0.8em;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
#nav a {
  color: white;
}

.list {
  color: white;
  text-align: left;
  margin-top: 3em;
  margin-left: 2em;
  padding: 0em;
}
.border {
  padding: 1em;
  border: 1px solid #640064 !important;
  max-width: 25%;
  margin-top: 1.5em;
  border-top-right-radius: 1em;
  border-bottom-left-radius: 1em;
  color: #640064;
  font-weight: bolder;
}
p {
  font-size: small;
}
h2 {
  font-size: large;
}
.logout {
  color: white;
  text-align: left;
  margin-top: 4em;
  margin-left: 2em;
}
.modal {
  margin-top: 10em;
}
.modal-dialog {
  max-width: 40%;
}
.modal-content {
  padding: 5em;
  border-radius: 1.5em;
}
form {
  margin-top: 1em;
  margin-bottom: 1em;
}
.modal-title {
  font-size: x-large;
  text-align: center;
  font-weight: bold;
}
.btnn {
  margin: auto;
}
.btn {
  background-color: #640064;
  padding-left: 1.5em;
  padding-right: 1.5em;
}
.fa-credit-card {
  color: #640064;
}
.body h4 {
  padding: 1.2em;
}
.custom-select {
  margin-top: 1.5em;
}
.fa-check-circle{
  color: white;
  color: green;
  font-size: 4em;
  text-align: center;
  margin: 0 auto;
}
.body h3{
  font-size: xx-large;
  font-weight: 700;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  text-align: center;
}


@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .hello {
    background-color: #640064;
    height: 34em;
    display: none;
  }
  img {
    width: 20%;
    border-radius: 50%;
    object-fit: contain;
    height: 100px;
    display: none;
  }
  .border {
    padding: 1em;
    border: 1px solid #640064 !important;
    max-width: 80%;
    margin-top: 1.5em;
    border-top-right-radius: 1em;
    border-bottom-left-radius: 1em;
    color: #640064;
    font-weight: medium;
    margin: 0 auto;
    text-align: center;
  }
  h2 {
    font-size: medium;
    font-weight: bolder;
  }
  h1 {
    font-size: x-large;
  }
  .shadow {
    margin-left: 2em;
    max-width: 100%;

    width: 100%;
    color: white;
    margin-top: 1em;
  }
  .ss {
    margin-bottom: 2em;
  }
}
</style>