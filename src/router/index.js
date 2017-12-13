/*
 * @Author: lucm
 * @Date: 2017-11-29 14:19:35
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-13 15:23:55
 */
import Vue from 'vue'
import Router from 'vue-router'
import home from './_include/home'
import demo from './_include/demo'
import Index from 'index'

Vue.use(Router)
let newArr = [
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]
let newRouter = [
  ...newArr,
  ...home,
  ...demo
]
export default new Router({
  routes: newRouter
})
