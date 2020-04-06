import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/base.css'
import  axios from 'axios'

Vue.prototype.$http = axios
/* 配置请求的根路径 */
axios.defaults.baseURL='128.0.0.1'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
