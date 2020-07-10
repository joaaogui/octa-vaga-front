import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        activeComponents: Array(),
    },
    mutations: {
        addComponent(state, component) {
            component.i = state.activeComponents.length > 0 ? state.activeComponents.slice(-1)[0].i + 1: 0;
            state.activeComponents.push(component);
        },
        removeComponent(state, id) {
            state.activeComponents = state.activeComponents.filter(item => item.i !== id)
        },
        editComponent(state, {element, index}) {
            let existingComponent = state.activeComponents[index]
            existingComponent = element
        }
    },
    actions: {},
    modules: {}
})
