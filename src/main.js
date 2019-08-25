import Vue from 'vue'
import App from './App'
import router from './router'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
