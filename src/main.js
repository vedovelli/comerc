
import Vue from 'vue'
import App from './App'
import router from './router'
import bus from '@p/event-bus'
import http from '@p/http'

Vue.config.productionTip = false

Vue.use(bus)
Vue.use(http)

Vue.directive('focus', {
  bind: function (el, bindings) {
    el.style.color = bindings.expression
    el.focus()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
