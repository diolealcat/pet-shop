import { createStore } from 'vuex'

export default createStore({
     state: {
          productList: [],
          cart: {},
     },
     mutations: {
          setProducts(state, payload) {
               state.productList = payload;
          },
          setCart(state, payload) {
               state.cart[payload.id] = payload;
          },
          emptyCart(state) {
               state.cart = {};
          },
          increment(state, payload) {
               state.cart[payload].amount = state.cart[payload].amount + 1;
          },
          reduce(state, payload) {
               state.cart[payload].amount = state.cart[payload].amount - 1
               if(state.cart[payload].amount === 0){
                    delete state.cart[payload]
               }
          }
     },
     actions: {
          async getDataProducts({ commit }) {
               try {
                    const res = await fetch(
                         "http://sva.talana.com:8000/api/product/"
                    );
                    const data = await res.json();
                    commit("setProducts", data);
               } catch (e) {
                    console.log(e);
               }
          },
          addToCart({ commit, state }, productList) {
               Object.prototype.hasOwnProperty.call(state.cart, productList.id)
                    ? (productList.amount =
                           state.cart[productList.id].amount + 1)
                    : (productList.amount = 1);
               commit("setCart", productList);
          },
     },
     getters: {
          totalAmount(state) {
               return Object.values(state.cart).reduce(
                    (acc, { amount }) => acc + amount,
                    0
               );
          },
          totalPrice(state) {
               return Object.values(state.cart).reduce(
                    (acc, { amount, price }) => acc + amount * price,
                    0
               );
          },
     },
     modules: {},
});
