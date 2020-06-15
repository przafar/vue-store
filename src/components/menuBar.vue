<template>
  <div class="borderli">
    <input type="checkbox" id="check">
    <label @click="clickMenu" for="check" class="checkbtn">
      <i class="fas fa-bars"></i>
    </label>
    <ul v-body-scroll-lock="searchVisibleResult"  class="gender">
      <router-link to="/" tag="li">
        <h4>MEN</h4>
      </router-link>
      <router-link to="/Women" tag="li">
        <h4>WOMEN</h4>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data: () => ({
    searchVisibleResult: false,
  }),
  methods: {
    clickMenu() {
      this.searchVisibleResult = !this.searchVisibleResult
    }
  }
}
</script>
<style scoped>
  .gender li {
    display: inline-flex;
    margin-left: 40px;
    cursor: pointer;
  }
  .gender {
    text-align: center;
  }
  .borderli {
    border-top: 0.5px solid #b1b1b1;
    border-bottom: 0.5px solid #b1b1b1;
    padding-top: 20px;
    padding-bottom: 15px;
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
      font-size: 16px;;
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
  }
</style>