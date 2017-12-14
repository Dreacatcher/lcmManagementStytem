/*
* @Author: lcm
* @Date:   2017-04-17 18:01:21
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-14 17:17:32
*/

'use strict'
var path = require('path')
var srcDir = path.resolve(process.cwd(), 'src')
module.exports = {
  // idnex
  pubMyInfo: srcDir + '/components/mycenter/pubMyInfo',
  queryArticle: srcDir + '/components/article/queryArticle',
  pubArticle: srcDir + '/components/article/pubArticle'
}

