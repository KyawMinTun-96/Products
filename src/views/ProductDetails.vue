<template>
    <div class="container-xl">
        <h2 v-if="loading" class="text-center">Loading...</h2>
      <div v-else class="row">
        <div class="col-md-4">
          <img :src="product.image" class="img-fluid" alt="product image"/>
        </div>
        <div class="col-md-8 p-5">
            <h1 class="mb-3">{{ product.title }}</h1>
            <h3 class="text-info mb-3">$ {{ product.price }}</h3>
            <p class="mb-4">{{ product.description }}</p>
            <div class="d-flex justify-content-between">
                <RouterLink class="btn btn-md btn-outline-secondary" to="/products">Go Back</RouterLink>
                <button class="btn btn-md btn-primary">Add to Card</button>
            </div>
        </div>
      </div>
    </div>
</template>
  
<script>
    import axios from 'axios';

    export default {
      name: 'ProductDetails',
      data() {
        return {
            loading: false,
            product: {}
        }
      },

      created() {
        this.loading = true;
        axios.get(`https://fakestoreapi.com/products/${this.$route.params.id}`)
        .then(response => {
            this.product = response.data;
            this.loading = false;
        }).catch(e => {
            this.loading = false;
        })
      }
    }
</script>