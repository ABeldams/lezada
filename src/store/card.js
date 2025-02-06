export default {
    state: {
      cart: [],
    },
    getters: {
      cartItems: (state) => state.cart,
      cartCount: (state) => state.cart.length,
    },
    actions: {
      addToCart({ commit }, product) {
        commit('addItem', product);
      },
    },
    mutations: {
      addItem(state, product) {
        state.cart.push(product);
      },
    },
  };
  