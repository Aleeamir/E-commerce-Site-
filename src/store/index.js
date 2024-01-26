import { createStore } from 'vuex'
import * as product from './modules/product'
import * as list from './modules/list'


export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    },
    modules: {
        product,
        list,
    }
})