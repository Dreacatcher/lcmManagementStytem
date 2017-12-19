/*
 * @Author: lucm
 * @Date: 2017-11-02 17:17:58
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-19 17:07:40
 */

import Fetch from 'fetch'
/* *******************设置API请求地址***************************/
let interfaceEnv = {
  'test': 'http://localhost:3000/api'
}
let base = interfaceEnv.test

/* *******************设置API请求地址***************************/
// 登录
export const userlogin = (params, callball) => {
  Fetch.httpRequestPostHasUTF8(`${base}/users/users0005`, { params: params }, (res) => {
    callball(res)
  })
}
// 注册
export const userregist = (params, callball) => {
  Fetch.httpRequestPostHasUTF8(`${base}/users/users0001`, { params: params }, (res) => {
    callball(res)
  })
}
