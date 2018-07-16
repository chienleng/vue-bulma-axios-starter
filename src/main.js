import Vue from 'vue'
import axios from './api'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
