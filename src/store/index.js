import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import state from './state'
import mutations from './mutations'
import getters from './getters'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {},
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
    async fetchBasketById({commit}, id) {
      try{
        const shoe = (await firebase.database().ref(`/shoes/basket`).child(id).once('value')).val() || {}
        return {...shoe, id}
      } catch(e) {
        commit('setError', e)
        throw e
      }
    },
    async removeCart({commit}, id ){
      try {
        const products = (await firebase.database().ref(`/shoes/men`).once('value')).child(id)
        products.remove()
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async basketShoes({commit}) {
      try{
        const basketShoes = (await firebase.database().ref(`/shoes/basket`).once('value')).val() 
        const ties = []
        Object.keys(basketShoes).forEach(key => {
          ties.push({
            name: basketShoes[key].name,
            cost: basketShoes[key].cost,
            image: basketShoes[key].image,
            quantity: basketShoes[key].quantity,
            id: key
          })
          return ties 
        })
        return ties 
      } catch(e) {
        commit('setError', e)
        throw e
      }
    },
    async updateShoes({commit}, {id, quantity, cost, image, name}) {
      try {
        await firebase.database().ref('/shoes/basket').child(id).update({quantity, cost, image, name})
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    } 
  },
  modules: {
    state, mutations, getters
  },
  getters: {}
})
 