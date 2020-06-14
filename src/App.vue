<template>
  <div id="container">
    <ul class="header">
      <router-link to="/" tag="li">
        <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/065fea46998397.Y3JvcCwyMTgzLDE3MDksNDgsMA.png" alt="">
      </router-link>
        <Counter v-bind:quantity="updated"/>
    </ul>
    <modal-search />
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
import ModalSearch from './components/ModalSearch'

  export default {
    name: 'App',
    data: () => ({
    shoes: [],
    }),
    components: {
      Counter, ModalSearch
    },
    computed: {
      updated() {
        return this.$store.getters.PRODUCTS.length
      }
    },
  }
</script>

<style lang="scss" scoped>
  img {
    width: 80px;
    height: 66px;
  }
  .header {
    margin-top: 15px;
  }
  .header li {
    display: inline;
  }
  
  .gender li {
    display: inline-flex;
    text-align: center;
    margin-right: 50px;
    cursor: pointer;
  }
  .gender {
    text-align: center;
  }
  hr {
    margin-top: 5px;
  } 
  .header {
    margin-top: 5px;
    margin-bottom: 5px;
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
  
  
  
</style>
