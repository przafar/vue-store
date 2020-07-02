<template>
  <div id="container">
    <div class="header row">
      <div class="col-md-6 jordan">
        <li><a href="https://www.nike.com/membership">Join us</a></li>
        <li>
          <img src="https://www.nike.com/assets/experience/ciclp/static/v2/1256-dde1d050b5a/static/icons/jordan.svg" alt="">
        </li>
        <li><a href="https://www.nike.com/w/converse-akmjx" class="converse">Converse</a></li>
      </div>
      <div class="other col-md-6" v-if="info">
        <li><modal-login class="login" /></li>
        <li><Counter class="counter" v-bind:quantity="updated"/></li>
        <li><a href="#"><i class="fas fa-map-marker-alt"></i>{{ info.country }}</a></li>
      </div>
      <div class="other-else col-md-6" v-else>
        <li><modal-login class="login-else" /></li>
        <li><Counter class="counter-else" v-bind:quantity="updated"/></li>
      </div>
    </div>
    <Loader v-if="loading"/>
    
    <router-view @created="updatedCounter"></router-view>
    <footer>
      <div class="container">
        <div class="row">
          <li class="info col-md-4">
            <p>© 2020 Nike, Inc. All Rights Reserved</p>
          </li>
          <li class="guide col-md-8">
            <router-link to="/Admin" tag="a">Guides</router-link>
            <a href="#">Terms of Sale</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </li>
        </div>
      </div>
    </footer>

  </div>
</template>
<script>
import Counter from './components/counter'
import ModalLogin from './assets/modalLogin'
import Loader from './views/Loader'

  export default {
    name: 'App',
    data: () => ({
    shoes: [],
    loading: true,
    fixed: false

    }),
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 1000)
      
    },
    components: {
      Counter, ModalLogin, Loader
    },
    computed: {
      updated() {
        return this.$store.getters.PRODUCTS.length
      },
      info() {
      return this.$store.getters.info
    }
    },
  }
</script>

<style lang="scss" scoped>
  .img {
    width: 80px;
    height: 66px;
  }
  .header {
    padding: 0;
    padding-top: 10px;
    position: fixed;
    width: 100%;
    background: #ffffff;
    height: 55px;
    z-index: 9;

  }
  .header li {
    display: inline;
    padding: 0;
  }
  hr {
    margin-top: 5px;
  } 
  
  footer {
    background-color: rgb(17, 17, 17);
    color: white;
    margin-top: 60px;
  }
  footer li {
    display: inline-block;
  }
  .info {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 13px;
  }
  .guide {
    text-align: right;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .guide a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
    font-size: 13px;
  }
  .other {
    text-align: right;
  }
  .other li {
    display: inline-block;
    margin-right: 20px;
  }
  .other a {
    color: #111111;
    font-weight: 600;
  }
  .other a i {
    padding-right: 5px;
  }
  .jordan {
    text-align: left;
  }
  .jordan li {
    border-right: 0.5px solid #757575;
    padding: 23px 28px;
    cursor: pointer;
  }
  .jordan a {
    color: #111111;
    font-weight: 600;
  }
  .converse img {
    width: 100px;
  }
  .counter-else {
    position: absolute;
    padding-right: 173px;
    right: -130px;
    top: 5px;
  }
  .login-else {
    position: absolute;
    right: 80px;
    top: 5px;
  }
  .other-else {
    display: inline-block;
  }
  
  @media screen and (min-width: 370px) and (max-width: 1200px) {
    .header {
      margin-left: -25px;
    }
    .guide {
      text-align: left;
    }
    footer li {
      display: inline-flex;
    }
    .login {
      display: none;
    }
  }
  
  
  
</style>
