<template>
  <div class="borderli">
    <ul class="gender">
        <router-link to="/" tag="li">
        <h4>MEN</h4>
        </router-link>
        <router-link to="/Women" tag="li">
        <h4>WOMEN</h4>
        </router-link>
    </ul>
  </div>
</template>
<style scoped>
  .gender li {
    display: inline-flex;
    text-align: center;
    margin-left: 40px;
    cursor: pointer;
  }
  .gender {
    text-align: center;
    margin-left: 50px;
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
</style>