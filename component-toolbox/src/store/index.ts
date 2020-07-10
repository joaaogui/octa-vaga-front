import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      componentList: Array()
  },
  mutations: {
      addComponent(state, component) {
          state.componentList.push(component);
      },
      removeComponent(state, index) {
          state.componentList.splice(index, 1)
      }
  },
  actions: {
  },
  modules: {
  }
})
