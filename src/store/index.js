import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'




Vue.use(Vuex)
let cart = window.localStorage.getItem('cart')

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    products: []
  },
  
  mutations: {
    addToCart(state, product) {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) { 
          if (item.shown === product.shown) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          return state.cart.push(product)
          
        }
      } else {
        return state.cart.push(product)

      }
      this.commit('saveData')
    },
    loadProducts(state, item) {
      state.products = item
    },
    saveData(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart)) 
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      state.cart.splice(index, 1)
      this.commit('saveData')
    }
  },
  actions: {
    async fetchShoes({commit}) {
        const products = (await firebase.database().ref(`/shoes/men`).once('value')).val()
        const cats = []
        Object.keys(products).forEach(key => {
          cats.push({
            name: products[key].name,
            cost: products[key].cost,
            image: products[key].image,
            front: products[key].front,
            quantity: products[key].quantity,
            id: key
          })
          commit('loadProducts', products)
        })
        return cats  
    },
    async fetchShoesById({commit}, id) {
      try{
        const shoe = (await firebase.database().ref(`/shoes/men`).child(id).once('value')).val() || {}
        return {...shoe, id}
      } catch(e) {
        commit('setError', e)
        throw e
      }
    },
    async updateProduct({commit}, {id,  cost, image, name, front}) {
      try {
        await firebase.database().ref('/shoes/men').child(id).update({cost, image, name, front})
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async createProduct({commit}, {name, image, front, cost}) {
      try {
        const product = await firebase.database().ref('/shoes/men').push({name, image, front, cost})
        return {name, image, front, cost, id: product.key}
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    
  },
  getters: {
    PRODUCTS: state => {
      return state.cart
    },
    getTodoById: (state) => (id) => {
      return state.cart.find(todo => todo.id === id)
    }
  }
})
 