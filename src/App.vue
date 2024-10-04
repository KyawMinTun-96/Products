<template>
  <div>

    <menu-bar></menu-bar>
    <home></home>
    <!-- <product></product> -->
    <!-- <login></login> -->
    <!-- <profile></profile> -->
    <!-- <register></register> -->
  </div>
</template>


<script>
import MenuBar from './components/MenuBar.vue';
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Profile from '@/views/Profile.vue';


  export default {
    name: 'App',
    components: {
      MenuBar,
      Home,
      Product,
      Login,
      Register,
      Profile
    },
    data() {
      return {
        message: "Hello Vue Routers!"
      }
    }
  }
</script>
