<template>
  <div class="container">
    <ul>
     <form v-on:submit.prevent>
        <div class="addside">
          <li class="col-4 addphoto">
            <img :src="shoe.image" alt="">
          </li>
          <li class="col-4 addphoto">
            <img :src="shoe.front" alt="">
          </li>
          <li class="col-4 addinformation">
            <h6>Men's Running Shoe</h6>
            <p>{{ shoe.name }} <b></b></p>
            <h5>{{ shoe.cost }}$</h5> <br>
            <div v-if="basket.quantity > 0">
              <select class="select" v-model="basket.quantity">
                <option :key="quantity" v-for="quantity in quantityArray" :value="quantity">{{ quantity }}</option>
              </select>
            </div>
            <b v-else>You do not have this shoes</b>
            <button @click="submitHandler" class="btn add-cart">Add to Cart</button>
          </li>
          <div class="view">
            <p>The Nike Air Force 1 GORE-TEX Low retools the classic Air Force 1 with a street-approved design that meets the standards of GORE-TEX waterproof technology. It features water-wicking flat laces, a GORE-TEX bootie and GORE-TEX branding on the heel.</p>
          </div>
          <div>
            
          </div> 
        </div>
     </form>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data: () => ({
    shoe: [], 
    basket: [],
    quantity: 1,
    selected: [],
    quantityArray: [],

  }),     
  async mounted() {
    const id = this.$route.params.id
    this.shoe = await this.$store.dispatch('fetchShoesById', id)
    this.basket = await this.$store.dispatch('fetchBasketById', id)
    this.shoes = await this.$store.dispatch('basketShoes')
    for (let i = 1; i <= 10; i++) {
      this.quantityArray.push(i);
    }
    if (this.$props.basket.quantity > 1) {
      this.selected = this.$props.basket.quantity;
    }     
  },

  methods: {
    submitHandler() {
        this.m1()
    },
    async m1() {
      const updateShoes = {
        name: this.shoe.name,
        cost: this.shoe.cost,
        image: this.shoe.image,
        quantity: this.basket.quantity+=1,
        id: this.shoe.name
      }
      const addShoes = {
        name: this.shoe.name,
        cost: this.shoe.cost,
        image: this.shoe.image,
        quantity: this.quantity,
        id: this.shoe.name
      }
   
      
      if(this.basket.name === this.shoe.name) { 
        await this.$store.dispatch('updateShoes', updateShoes)  
      } else {
        await this.$store.dispatch('updateShoes', addShoes)
      }
      
      
 
      this.$emit('created') 
    },
  },
   
}

</script>

<style scoped>

  .addside li {
    display: inline-block;
  }
  .addphoto img {
    width: 320px;
  }
  .view {
    margin-top: 40px;
    text-align: center;
  }
  .loading {
    margin-left: 46%;
    margin-top: 150px;
    margin-bottom: 150px;
  }
  .select {
    margin-right: 100px;
  }
  .add-cart {
    margin-top: 20px;
    margin-bottom: 15px;
    width: 260px;
    height: 58px;
    border-radius: 30px;
    background: black;
    color: #ffffff;
    transition: 0.3s;
    transition-timing-function: ease-in-out;
  }
  .add-cart:hover {
    opacity: 0.8;
   
  }
  .addinformation {
    display: block;
    margin-top: 120px;
    margin-bottom: 120px;
  }
  .addinformation h5 {
    position: relative;
    margin-top: -60px;
    margin-left: 200px;
    font-size: 18px;
  }
  .addinformation p {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 0px;
  }
  .addinformation h6 {
    margin-top: -120px;
    position: relative;
  }
  .select {
    margin-top: 10px;
  }
  
</style>