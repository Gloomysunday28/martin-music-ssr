// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import baseInfo from './model/baseInfo'
import { Axios } from '@/api/http'

Vue.use(Vuex)

const fetchBar = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('bar 组件返回 ajax 数据');
    }, 1000);
  });
};

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
// import { fetchItem } from './api'

export function createStore () {
  return new Vuex.Store({
    modules: {
      baseInfo
    },
    state: {
      data: {}
    },
    actions: {
      fetchData ({ commit }, { fetch }) {
        // console.log('martin', fetch)/* 2019年11月15日 17时19分12秒 */
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        // console.log('martin', Axios.get)/* 2019年11月15日 17时25分47秒 */
        return Promise.all(fetch.map(v => {
          return Axios.get(v.api).then(res => {
            // console.log('res', res)/* 2019年11月15日 17时27分21秒 */
            commit('setItem', { res, param: v.param })
          }).catch(err => {
            console.log('err', err)/* 2019年11月15日 17时28分51秒 */
          })
        }))
      },
    },
    mutations: {
      setItem (state, { res, param }) {
        // console.log('res', res.data)/* 2019年11月15日 17时12分47秒 */
        // console.log('param', param)/* 2019年11月15日 17时12分47秒 */
        state.data[param] = res.data
      }
    }
  })
}