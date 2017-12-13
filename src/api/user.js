/*
 * @Author: lucm
 * @Date: 2017-11-02 17:17:58
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-13 17:43:18
 */

import fetch from '../tools/fetch'
/* *******************设置API请求地址***************************/
let interfaceEnv = {
  'test': 'http://106.15.230.236:5555/auth-service'
}
let base = interfaceEnv.test

/* *******************设置API请求地址***************************/
// 登录
export const userlogin = (params, callball) => {
  fetch.httpGetRequest(`${base}/manager/login?accessToken=123`, { params: params }, (res) => {
    callball(res)
  })
}
