/*
 * @Author: lucm
 * @Date: 2017-06-05 17:21:49
 * @Last Modified by: lucm
 * @Last Modified time: 2017-09-21 16:21:53
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from './store'
import AMap from 'vue-amap'
import User from 'user'
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(AMap)

// 识别筑民生APP内置浏览器内核标识
if (User.isAppId()) {
  /* eslint-disable no-new */
  document.addEventListener('deviceready', function () {
    new Vue({
      el: '#app',
      router,
      store,
      template: '<App/>',
      components: { App }
    })
  })
} else {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  })
}
