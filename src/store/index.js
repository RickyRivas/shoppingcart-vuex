import { createStore } from 'vuex';
import productsModule from './modules/products';
import cartModule from './modules/cart';
const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule
  },
  state() {
    return {
      isLoggedin: false
    };
  },
  mutations: {
    login(state) {
      state.isLoggedin = true;
    },
    logout(state) {
      state.isLoggedin = false;
    }
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedin;
    }
  }
});
export default store;
