export const state = {
    list: [],
}

export const mutations = {
    saveList(state, data) {
        state.list = data
    }
}

export const actions = {
    async getList({ commit }) {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(response => {
                commit('saveList', response)
            });
    }
}
export const getters = {
    list: (state => state.list)
}