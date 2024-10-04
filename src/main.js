import { createApp } from 'vue'
import router from '@/Router';
import App from './App.vue'

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';


// Jquery
import jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// jquery ကိုကြိုက်တဲ့နေရာကနေယူသုံးနိုင်ဖို့အတွက်
window.$ = window.jQuery = jQuery;


createApp(App)
  .use(router)
  .mount('#app')
