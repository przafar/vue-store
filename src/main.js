import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VModal from 'vue-js-modal'
import VueFuse from 'vue-fuse'
import VBodyScrollLock from 'v-body-scroll-lock'



import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
Vue.use(VModal)
Vue.use(VueFuse)
Vue.use(VBodyScrollLock)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(IconsPlugin)
Vue.config.productionTip = false


firebase.initializeApp({
  apiKey: "AIzaSyDqB6_6PdyNnItzGarcLkjxrulpMZeOYv8",
  authDomain: "vue-store-1.firebaseapp.com",
  databaseURL: "https://vue-store-1.firebaseio.com",
  projectId: "vue-store-1",
  storageBucket: "vue-store-1.appspot.com",
  messagingSenderId: "768872711485",
  appId: "1:768872711485:web:863c35b1aa062f57de3154",
  measurementId: "G-LYEMB2SSV4"
})

let app 

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app') 
  } 
})
