import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import category from './modules/category'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    category
  },
  getters
})

export default store
