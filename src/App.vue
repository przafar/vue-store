<template>
  <div id="container">
    <ul class="header">
      <router-link to="/" tag="li">
        <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/065fea46998397.Y3JvcCwyMTgzLDE3MDksNDgsMA.png" alt="">
      </router-link>
      <router-link to="/Store" tag="li" class="store" >
        <Counter v-bind:updateCount="updated"/>
      </router-link>
    </ul>
    <hr>
    <ul class="gender">
          <router-link to="/" tag="li">
            <h4>MEN</h4>
          </router-link>
          <router-link to="/Women" tag="li">
            <h4>WOMEN</h4>
          </router-link>
      </ul>
      <hr>
    <router-view :key="updated + count" @created="updatedCounter"></router-view>
    <footer>
      <li class="info">
        <p>© 2020 Nike, Inc. All Rights Reserved</p>
      </li>
      <li class="guide">
        <a href="#">Guides</a>
        <a href="#">Terms of Sale</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </li>
    </footer>

  </div>
</template>
<script>
import Counter from './components/counter'
  export default {
    name: 'App',
    data: () => ({
    shoes: [],
    updated: 0,
    count: 0
    }),
    async mounted() {
      this.shoes = await this.$store.dispatch('basketShoes')
      this.updated = this.shoes.length
    },
    components: {
      Counter
    },
    methods: {
      updatedCounter() {
        this.updated++
      }
    }
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
    margin-left: 120px;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 13px;

  }
  .guide {
    margin-left: 450px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .guide a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
    font-size: 13px;
  }
  .store {
    float: right;
    margin-right: 50px;
    margin-top: 10px;
    display: block;
  }
  .store i {
    font-size: 22px;
  }
  .store p {
    border: 1px solid orange;
    text-align: center;
    background-color: orange;
    color: white;
    border-radius: 50%;
    font-size: 12px;
    margin-top: -10px;
    margin-left: 0px;
    position: relative;
    
  }
  
</style>
