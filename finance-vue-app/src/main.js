// import Vue from 'vue'
// import App from './App.vue'
// import store from './store' 
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)

// new Vue({
//   store, // Передаем созданный Vuex Store в экземпляр Vue
//   render: h => h(App)
//   ,
//   router
// }).$mount('#app')
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: []
  },
  mutations: {
    addTransaction(state, transaction) {
      state.transactions.push(transaction);
    }
  },
  actions: {
    addTransaction({ commit }, transaction) {
      commit('addTransaction', transaction);
    }
  }
});

