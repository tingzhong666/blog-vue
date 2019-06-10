import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { animejs } from '@/utils'
import anime from 'animejs'
import '@/utils/filter'

if (process.env.NODE_ENV === 'development') {
  const ElementUI = require('element-ui')
  require('element-ui/lib/theme-chalk/index.css')
  Vue.use(ElementUI)
  require('nprogress/nprogress.css')
}

Vue.animejs = Vue.prototype.animejs = animejs
Vue.anime = Vue.prototype.anime = anime
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
