
import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@c/Dashboard/Main'
import Admin from '@c/Admin/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard.index',
      component: Dashboard
    }, {
      path: '/admin',
      name: 'admin.index',
      component: Admin
    }
  ]
})
