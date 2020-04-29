import Vue from 'vue'
import App from './App.vue'

// Import VueRouter library, and this apps routes
import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import StateAPIService from '@/services/stateService'

Vue.use(VueRouter) // Use VueRouter

// Configure Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Add API service to vue prototype
Vue.prototype.$stateService = StateAPIService

//addleaflets css
import "leaflet/dist/leaflet.css"

new Vue({
  render: h => h(App),
  router /* include the routes when creating vue instance*/
}).$mount('#app')
