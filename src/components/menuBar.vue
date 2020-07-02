<template>
  <div class="borderli">
    <div>
      <div class="row fixedli">
        <div class="logo col-md-4">
          <router-link to="/" tag="a">
            <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/065fea46998397.Y3JvcCwyMTgzLDE3MDksNDgsMA.png" alt="">
          </router-link>
        </div>
        <div class="col-md-4">
          <input type="checkbox" id="check">
          <label @click="clickMenu" for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <ul v-body-scroll-lock="searchVisibleResult"  class="gender">
            <router-link to="/" tag="li">
              <h4>MEN</h4>
            </router-link>
            <router-link to="/" tag="li">
              <h4>WOMEN</h4>
            </router-link> 
            <li>
              <modal-login class="login" />
            </li> 
          </ul>
        </div>
        <div class="col-md-4">
          <modal-search :key="$route.fullPath" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ModalLogin from '../assets/modalLogin'
import ModalSearch from '../components/ModalSearch'


export default {
  data: () => ({
    searchVisibleResult: false,
  }),
  methods: {
    clickMenu() {
      this.searchVisibleResult = !this.searchVisibleResult
    }
  },
  components: {
    ModalLogin, ModalSearch
  }
}
</script>
<style scoped>
  .fixedli {
    background: white;
  }
  img {
    width: 80px;
    height: 66px;
  }
  .logo  {
    text-align: left;
    padding-left: 30px;
  }
  .gender li {
    display: inline-flex;
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
  .gender {
    text-align: center;
    margin-top: 15px;
  }
  .borderli {
    border-top: 0.5px solid #b1b1b1;
    border-bottom: 0.5px solid #b1b1b1;
    padding: 0;
  }
  .borderli ul {
    margin-bottom: 0px;
  }
  .checkbtn {
    font-size: 30px;
    color: black;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}
#check {
    display: none;
}
.login {
  display: none;
}
  @media screen and (min-width: 370px) and (max-width: 1200px) {
    .borderli {
      border: none;
    }
    .borderli ul {
      padding: 0;
    }
    .gender li {
      display: inline;
      text-align: left;
    }
    .gender h4 {
      padding-bottom: 20px;
      padding-left: 20px;
      border-bottom: 0.5px solid rgb(175, 168, 168);
    }
    nav ul li  h4 {
      font-size: 12px;
    }
    .checkbtn {
      display: block;
      position: absolute;
      right: -25px;
      top: -5px;
    }
    .checkbtn {
      font-size: 38px;
    }
    ul {
      position: fixed;
      width: 75%;
      height: 100vh;
      background: white;
      top: 60px;
      right: -100%;
      text-align: center;
      transition: all .5s;
      border: 0.6px solid rgb(175, 168, 168);
      z-index: 10;
    }

    h4:hover,h4.active {
      background: none;
      color: #585858;
    }
    #check:checked ~ ul {
      right: 0;
    }
    .login {
      padding-left: 20px;
      padding-bottom: 25px;
      border-bottom: 0.6px solid rgb(175, 168, 168);
      display: block;
    } 
  }
</style>