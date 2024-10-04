import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Product from '@/views/Product.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import Profile from '@/views/Profile.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {path: '/products', component: Product},
  {path: '/products/:id', component: ProductDetails},
  {path: '/profile', component: Profile},
  {path: '/login', component: Login},
  {path: '/signup', component: Register}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;