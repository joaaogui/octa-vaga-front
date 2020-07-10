import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
    activeComponents: Array(),
}

export const mutations = {
    addComponent: (state: any, component: any) => {
        component.i = state.activeComponents.length > 0 ? state.activeComponents.slice(-1)[0].i + 1 : 0;
        state.activeComponents.push(component);
    },
    removeComponent: (state: any, id: number) => {
        state.activeComponents = state.activeComponents.filter((item: { i: number }) => item.i !== id)
    },
    editComponent: (state: any, {element, index}: any) => {
        let existingComponent = state.activeComponents[index]
        existingComponent = element
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions: {},
    modules: {}
})


