import {expect} from 'chai'
import {mutations} from '@/store'

const {addComponent, removeComponent} = mutations

const component1 = {
    h: 1.85,
    i: 0,
    type: "CheckBox",
    w: 5,
    x: 1,
    y: 7
}
const component2 = {
    h: 1.85,
    i: 1,
    type: "CheckBox",
    w: 2,
    x: 5,
    y: 8
}

describe('mutations', () => {
    it('addComponent should increase the lenght of components by one', () => {
        const state = {activeComponents: []}
        addComponent(state, component1)
        expect(state.activeComponents.length).to.equal(1)
    })
    it('removeComponent should decrease the lenght of components by one', () => {
        const state = {activeComponents: []}
        addComponent(state, component1)
        addComponent(state, component2)
        removeComponent(state, 1)
        expect(state.activeComponents.length).to.equal(1)
    })
    it('addComponent should add the same argument as passed', () => {
        const state = {activeComponents: []}
        addComponent(state, component1)
        expect(state.activeComponents[0]['type']).to.equal("CheckBox",)
    })
    it('the id of the added component should be above than the id of the last component', () => {
        const state = {activeComponents: []}
        addComponent(state, component1)
        addComponent(state, component2)
        expect(state.activeComponents[1]['i']).to.above(state.activeComponents[0]['i'])
    })

});