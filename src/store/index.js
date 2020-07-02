import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'





Vue.use(Vuex)
let cart = window.localStorage.getItem('cart')

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    products: [],
    info: {},
    error: null
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
    loadCommit(state, item) {
      state.comment = item
    },
    saveData(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart)) 
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      state.cart.splice(index, 1)
      this.commit('saveData')
    },
    setInfo(state, info) {
      state.info = info
    },
    clearInfo(state) {
      state.info = {}
    },
    setError(state, error) {
      state.error = error
    },

  },
  actions: {
    async register({dispatch}, {email, password, name, lastName, country, date}) {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      const uid = await dispatch('getUid')
      await firebase.database().ref(`/users/${uid}/info`).set({
        name,
        country,
        lastName,
        date
      })
     
    },
    getUid() {
      const user = firebase.auth().currentUser
      return user ? user.uid : null
    },
    async login({commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async logout({commit}) {
      await firebase.auth().signOut()
      await commit('clearInfo')
    },
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
    async createComment({commit}, {name, rate, message, date, id}) {
      try {
        const comment = await firebase.database().ref('/shoes/men').child(id + '/comment').push({name, message, rate, date})
        return {...comment, name, message, rate, date, id}
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async fetchComment({commit}, id) {
      try {
        const comment = (await firebase.database().ref('/shoes/men').child(id + '/comment').once('value')).val() || {}
        return Object.keys(comment).map(key => ({...comment[key], id: key}))
      } catch (e) {
        commit('setError', e)
        throw e
      } 
    },
    async fetchInfo({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('setInfo', info)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
    
    
    
  },
  getters: {
    PRODUCTS: state => {
      return state.cart
    },
    getTodoById: (state) => (id) => {
      return state.cart.find(todo => todo.id === id)
    },
    info: s => s.info,
    error: s => s.error

  }
})
 