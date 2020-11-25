import Vue from 'vue'
import Login from './Login.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios' 
import VueRouter from 'vue-router'


// Components load




axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.prototype.$http = axios



new Vue({
  render: h => h(Login),
}).$mount('#app')

