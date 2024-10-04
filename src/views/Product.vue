<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4" v-for="product in products" :key="product.id">
          <div class="card">
            <div class="card-image">
              <img :src="product.image" alt="...">
            </div>
            <div class="card-body text-center">
              <h6 class="card-title my-4">{{ product.title }}</h6>
              <p class="card-text text-muted fw-semibold">$ {{ product.price}}</p>
              <RouterLink :to="`/products/${product.id}`" class="btn btn-primary d-block">More Details</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  import axios from 'axios';

  export default {
    name: 'Products',
    data() {
      return {
        products: []
      }
    },

    created() {
      axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.products = response.data;
      })
    }
  }
</script>


<style>
  .card-image {
    display: flex;
    justify-content: center;
  }

  .card-image img{
    height: 200px;
  }
</style>