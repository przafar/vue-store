<template>
  <div>
    <router-link to="/Store" tag="li" class="store" >
      <i>
        <svg class="bi bi-bucket-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 1.5A4.5 4.5 0 003.5 6h-1a5.5 5.5 0 1111 0h-1A4.5 4.5 0 008 1.5z" clip-rule="evenodd"/>
          <path fill-rule="evenodd" d="M1.61 5.687A.5.5 0 012 5.5h12a.5.5 0 01.488.608l-1.826 8.217a1.5 1.5 0 01-1.464 1.175H4.802a1.5 1.5 0 01-1.464-1.175L1.512 6.108a.5.5 0 01.098-.42z" clip-rule="evenodd"/>
        </svg>
      </i>
      <p>{{ quantity }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ['quantity'],
  data: () => ({
  
  }),
  methods: {

  }
}
</script>
<style scoped>
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
  .store {
    float: right;
    margin-right: 50px;
    margin-top: -55px;
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
  @media screen and (min-width: 370px) and (max-width: 1200px) {
    .store {
      position: absolute;
      right: 0;
      top: 66px;
      padding-right: 5px;
    }
  }
</style>