<template>
  <div>
      <input class="select" type="number" v-model="basket.quantity">
  </div>
</template>
<script>
export default {
  props: ['basket'],
    
  
}
</script>
<style scoped>
  .select {
    margin-top: 10px;
    border: 1px solid #757575;
    border-radius: 3px;
    width: 80px;
    font-size: 18px;
    padding-left: 5px;
  }
</style>