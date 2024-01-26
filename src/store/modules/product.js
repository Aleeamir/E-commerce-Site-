export const state = {
    products: [],
    // isAmI: false
}
export const mutations = {
    saveProducts(state, data) {
        state.products = data
    }
}
export const actions = {
    async getProducts({ commit }) {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(response => {
                commit('saveProducts', response)
            });
    }
}
export const getters = {
    products: (state => state.products)
}