import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import routes from './router'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
