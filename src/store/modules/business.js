/*
 * @Author: willy
 * @Date: 2017-06-22 15:24:45
 */
'use strict'
let url = 'http://222.85.156.45/gy_data_platform/service/'
import fetch from 'fetch'
// import Url from 'url'
const state = {
  businessData: [],
  businessGdData: []
}
const getters = {
}
const mutations = {
  setBbusinessData(state, payload) {
    state.businessData = payload.businessData
  },
  setBbusinessGdData(state, payload) {
    state.businessGdData = payload.businessGdData
  }
}
const actions = {
  // 企业查询
  getBusinessData({ commit }, payload) {
    var _param = {
      ENTNAME: payload.ENTNAME
    }
    fetch.httpRequestPost(url + 'DAP001', _param, function(
      responseData
    ) {
      if (
        responseData &&
        responseData.data &&
        responseData.data.body &&
        responseData.data.body.qyxx
      ) {
        commit({
          type: 'setBbusinessData',
          businessData: responseData.data.body
        })
      } else {
        if (responseData.data.head.rtnCode === '999999') {
          console.log('报了一串999999')
          commit({
            type: 'setBbusinessData',
            businessData: []
          })
        } else {
          commit({
            type: 'setBbusinessData',
            businessData: []
          })
        }
      }
    })
  },
  // 股东查询
  getBusinessGdData({ commit }, payload) {
    var _param = {
      ENTNAME: payload.ENTNAME
    }
    fetch.httpRequestPost(url + 'DAP002', _param, function(
      responseData
    ) {
      if (
        responseData &&
        responseData.data &&
        responseData.data.body &&
        responseData.data.body.qyxx
      ) {
        commit({
          type: 'setBbusinessGdData',
          businessGdData: responseData.data.body
        })
      } else {
        if (responseData.data.head.rtnCode === '999999') {
          console.log('报了一串999999')
          commit({
            type: 'setBbusinessGdData',
            businessGdData: []
          })
        } else {
          commit({
            type: 'setBbusinessGdData',
            businessGdData: []
          })
        }
      }
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
