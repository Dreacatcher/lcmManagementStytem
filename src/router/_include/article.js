/*
 * @Author: lucm
 * @Date: 2017-12-12 16:19:58
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-14 17:18:02
 */
import Index from 'index'
import PubArticle from 'pubArticle'
import QueryArticle from 'queryArticle'
import PubMyInfo from 'pubMyInfo'
export default [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/pubMyInfo',
        name: 'pubMyInfo',
        component: PubMyInfo
      },
      {
        path: '/pubArticle',
        name: 'pubArticle',
        component: PubArticle
      },
      {
        path: '/queryArticle',
        name: 'queryArticle',
        component: QueryArticle
      }
    ]
  }
]

