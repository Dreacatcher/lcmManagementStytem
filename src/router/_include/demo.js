/*
 * @Author: lucm
 * @Date: 2017-12-12 16:19:58
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-13 15:23:24
 */
import Index from 'index'
import Holle from 'holle'
export default [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      { path: '/hello', component: Holle, name: 'demo', menuShow: true }
    ]
  }
]

