import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import VueRouter from 'vue-router'
import './assets/global.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
