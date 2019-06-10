import Vue from 'vue'
import Vuex from 'vuex'
import * as api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 博主信息
    info: {},
    // 博文目录
    tree: [],
    // 博文一维目录,
    transTree: [],
    // 侧边栏动画所需 dom
    asideAnimeParams: {
      line1: {},
      line2: {},
      dian: {},
      aside: {},
      main: {},
      openBtn: {}
    },
    // 侧边栏是否打开
    asideIs: true
  },
  getters: {
  },
  mutations: {
    setInfo (state, newV) {
      state.info = newV
    },
    setAsideWidth (state, newV) {
      state.asideWidth = newV
    },
    setTree (state, newV) {
      state.tree = newV
    },
    setTransTree (state, arr) {
      state.transTree = arr
    },
    // 侧边栏动画 dom 获取/设置
    setAsideAnimeDom (state, newV) {
      for (let key in newV) {
        state.asideAnimeParams[key] = newV[key]
      }
    },
    setAsideIs (state, newV) {
      state.asideIs = newV
    }
  },
  actions: {
    init ({ dispatch }) {
      dispatch('getInfo')
    },
    // 博主信息
    async getInfo ({ commit }) {
      let res = await api.info()
      if (res.code) return
      commit('setInfo', res.data)
    },
    // 侧边栏动画 打开
    async asideAnimeOpen ({ state, commit }) {
      commit('setAsideIs', true)
      const { line1, line2, dian, aside, main, openBtn } = state.asideAnimeParams

      // 阶段1
      await Vue.animejs({
        targets: openBtn,
        opacity: 0,
        duration: 200
      }).finished

      // 阶段2
      Vue.animejs({
        targets: aside,
        width: 300,
        duration: 300
      })
      await Vue.animejs({
        targets: main,
        paddingRight: 300,
        duration: 300
      }).finished

      // 阶段3
      Vue.animejs({
        targets: line1,
        rotateZ: 38,
        duration: 200
      })
      Vue.animejs({
        targets: line2,
        rotateZ: -38,
        duration: 200
      })
      Vue.animejs({
        targets: dian,
        opacity: 1,
        duration: 70
      })
    },
    // 侧边栏动画 关闭
    async asideAnimeClose ({ state, commit }) {
      const { line1, line2, dian, aside, main, openBtn } = state.asideAnimeParams

      // 阶段1
      Vue.animejs({
        targets: dian,
        opacity: 0,
        duration: 70
      })
      Vue.animejs({
        targets: line1,
        rotateZ: [38, 90],
        duration: 200
      })
      await Vue.animejs({
        targets: line2,
        rotateZ: [-38, -90],
        duration: 200
      }).finished

      // 阶段2
      Vue.animejs({
        targets: aside,
        width: 0,
        duration: 300
      })
      await Vue.animejs({
        targets: main,
        paddingRight: 0,
        duration: 300
      }).finished

      // 阶段3
      Vue.animejs({
        targets: openBtn,
        opacity: 1,
        duration: 200
      })
      commit('setAsideIs', false)
    }
  }
})
