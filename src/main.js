// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { financial, international } from './api'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)
// api接口
Vue.prototype.api = { financial, international }

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
