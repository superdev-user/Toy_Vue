import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
