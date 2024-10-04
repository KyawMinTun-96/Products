<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4" v-for="i in [1,2,3,4,5,6]" :key="i">
          <div class="card" style="width: 18rem;">
            <div class="card-image">
              <img src="@/assets/logo.png" class="img-fluid" alt="...">
            </div>
            <div class="card-body text-center">
              <p class="card-text text-muted fw-semibold">Product Name</p>
              <h5 class="card-title my-4">$ 100</h5>
              <a href="#" class="btn btn-primary d-block">More Details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>


  <style>
    .card-image {
      height: 200px;
    }

    .card-image img {
      display: block;
      margin: 0 auto;
    }
  </style>