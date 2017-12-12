/*
* @Author: lcm
* @Date:   2017-04-17 18:01:21
 * @Last Modified by: lucm
 * @Last Modified time: 2017-08-07 09:29:38
*/

'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
module.exports = {
  // ****************************************吉源驾校*****************************//
  businessOneVue: srcDir + '/components/business/businessOne.vue',
  businessTwoVue: srcDir + '/components/business/businessTwo.vue',
  businessThreeVue: srcDir + '/components/business/businessThree.vue',
  businessFourVue: srcDir + '/components/business/businessFour.vue',
  // store
  businessStore: srcDir + '/store/modules/business'
}

