import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HeaderBar from './components/HeaderBar/HeaderBar'
Vue.config.productionTip = false
Vue.component('HeaderBar',HeaderBar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
