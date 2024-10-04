import { createApp } from 'vue'
import App from './App.vue'

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

// Jquery
import jQuery from 'jquery';

// jquery ကိုကြိုက်တဲ့နေရာကနေယူသုံးနိုင်ဖို့အတွက်
window.$ = window.jQuery = jQuery;


createApp(App).mount('#app')
