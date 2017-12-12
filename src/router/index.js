/*
 * @Author: lucm
 * @Date: 2017-11-29 14:19:35
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-12 12:00:45
 */
import Vue from 'vue'
import Router from 'vue-router'
import business from './_include/business'

Vue.use(Router)
let newArr = [
  {
    path: '/',
    name: 'business',
    component: business
  }
]
let newRouter = [
  ...newArr,
  ...business
]
export default new Router({
  routes: newRouter
})
