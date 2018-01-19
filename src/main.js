import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store.js'
import router from './routes.js'
import Layout from './Layout.vue'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(Layout),
  router,
  store
})