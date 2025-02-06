import axios from 'axios';

export default {
  state: {
    products: [],
    product: null,
    cart: [],
  },
  getters: {
    allProducts: (state) => state.products,
    singleProduct: (state) => state.product,
    cartItems: (state) => state.cart,
    cartCount: (state) => state.cart.length,
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get('https://fakestoreapi.com/products');
      commit('setProducts', response.data);
    },

    async fetchSingleProduct({ commit }, productId) {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        commit('setSingleProduct', response.data);
      } catch (error) {
        console.error("Error fetching single product:", error);
      }
    },

    addToCart({ commit }, product) {
      console.log('Adding product to cart:', product);
      commit('addToCart', product);
    },

    increaseQuantity({ commit }, productId) {
      commit('increaseQuantity', productId);
    },

    decreaseQuantity({ commit }, productId) {
      commit('decreaseQuantity', productId);
    },

    removeItem({ commit }, productId) {
      commit('removeItem', productId);
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    setSingleProduct(state, product) {
      state.product = product;
    },

    addToCart(state, product) {
      console.log('Adding product to cart:', product);
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },

    increaseQuantity(state, productId) {
      const product = state.cart.find(item => item.id === productId);
      if (product) {
        product.quantity++;
      }
    },

    decreaseQuantity(state, productId) {
      const product = state.cart.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
      } else {
        // Call the removeItem mutation directly
        state.cart = state.cart.filter(item => item.id !== productId);
      }
    },
  
    removeItem(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
  },
};
