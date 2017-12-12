/*
 * @Author: lucm
 * @Date: 2017-06-08 11:06:27
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-12 11:46:31
 */
import Vue from 'vue'
import Vuex from 'vuex'
import business from './modules/business'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    business
  }
})
