/*
 * @Author: lucm
 * @Date: 2017-11-29 10:04:11
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-14 11:34:48
 */
'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
module.exports = {
  // horn
  appHeadVue: srcDir + '/components/holleWorld/holle',
  // 登录
  loginVue: srcDir + '/components/login/index',
  editor: srcDir + '/components/ui/editor/index'
}

