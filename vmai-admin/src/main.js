import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import '../theme/index.css'
import AVUE from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'

Vue.use(AVUE, {
  size: 'medium',
  ali: {
    region: 'oss-cn-shanghai',
    endpoint: 'oss-cn-shanghai.aliyuncs.com',
    stsToken: '',
    accessKeyId: 'egN4mlofm9ULaavi',
    accessKeySecret: 'ZfFVc57oxIygF2bJx2nYD5r727eYcq',
    bucket: 'avue-nn'
  }
})
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'medium' })
Vue.directive('click-outside', {
  bind() {
    this.event = event => this.vm.$emit(this.expression, event)
    this.el.addEventListener('click', this.stopProp)
    document.body.addEventListener('click', this.event)
  },
  unbind() {
    this.el.removeEventListener('click', this.stopProp)
    document.body.removeEventListener('click', this.event)
  },

  stopProp(event) {
    event.stopPropagation()
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
