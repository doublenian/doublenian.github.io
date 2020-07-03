import Vue from 'vue'
import App from './App.vue'
import router from './routes'
// import './plugins/element.js'
import VueProgressBar from 'vue-progressbar'
import store from './store'

Vue.config.productionTip = false
import BaiduMap from 'vue-baidu-map'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // require styles
// import 'swiper/dist/css/swiper.css'

// Vue.use(VueAwesomeSwiper)
const options = {
  color: '#2e7d32',
  failedColor: '#874b4b',
  thickness: '2px',
  transition: {
    speed: '0.4s',
    opacity: '0s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(Viewer, { name: 'viewer' })
Vue.use(VueProgressBar, options)
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'v6XneiQNG5Yf2A8DPeDgzPEyuokDWqzN'
})
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
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
