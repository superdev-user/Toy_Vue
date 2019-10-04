import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
