<template>
  <div>
    <div class="info">
      <li class="select-size"><p>Select size</p></li>
      <li class="float-right link"><a href="https://www.nike.com/us/en_US/sfg/womens-shoe-sizing-chart">Size guide</a></li>
    </div>
    <div>
      <form action="">
        <div class="radioContainer" v-for="(size, index) in sizes" :key="index">
          <input type="radio" :id="index" v-bind:value="size" v-model="picked" @click="temp(size)">
          <label class="circle" :for="index">{{ size }}</label>
        </div>      
        <span>Picked: {{ picked }}</span>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['picked'],
  data: () => ({
    picked: '',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11]

  }),
  methods: {
  
  }     
  
}
</script>
<style scoped>
  .radioContainer {
    display: inline-block;
    position: relative;
    cursor: pointer;
    margin-right: 10px;

  }
  .radioContainer input {
    display: none;
  }
  .radioContainer .circle {
    display: inline-block;
    width: 58px;
    height: 48px;
    background-color: white;
    border: 1px solid rgb(218, 218, 218);
    border-radius: 4px;
    text-align: center;
    padding-top: 8.5px;
  }
  .radioContainer:hover .circle {
    border: 1px solid black;
  }
  .radioContainer input:checked + .circle {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
  .info li {
    display: inline-block;
  }
  .link {
    padding-right: 15px;
  }
  .link a {
    text-decoration: none;
    color: #757575;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .select-size p {
    color: #000000;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  } 
</style>