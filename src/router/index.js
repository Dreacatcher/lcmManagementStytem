/*
 * @Author: lucm
 * @Date: 2017-11-29 14:19:35
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-14 16:14:13
 */
import Vue from 'vue'
import Router from 'vue-router'
import home from './_include/home'
import demo from './_include/demo'
import article from './_include/article'
import Index from 'index'
import Login from 'loginVue'

Vue.use(Router)
let newArr = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
let newRouter = [
  ...newArr,
  ...home,
  ...demo,
  ...article
]
export default new Router({
  routes: newRouter
})
