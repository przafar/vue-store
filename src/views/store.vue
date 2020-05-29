<template>
  <div class="box">
    <div class="basket">
      <ul class="modal-post" v-for="(shoe, index) in shoes" :key="index" :value="shoe.id">
        <li class="modal-image">
          <img :src="shoe.image" alt="">
        </li>
        <li class="modal-information">
          <h5>{{ shoe.name }}</h5>
          <p>{{ shoe.cost }}$ Quantity: <b>{{ shoe.quantity }}</b></p>
          <select class="select" v-model="shoe.quantity">
            <option :key="quantity" v-for="quantity in quantityArray" :value="quantity">{{ quantity }}</option>
          </select>
          <h5>Become a Nike Member for fast and free shipping</h5>
        </li>
        <li class="remove" @click="removeShoes(index)">
          <button class="btn">
            <i>
              <svg class="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
              </svg>
            </i>
          </button>
        </li>
      </ul>
      
    </div>
    <div class="value">
      <p>Summary</p>
      <p>Do you have a Promo Code?</p>
      <p>Quantity: {{ quantity }}</p>
      <p>Estimated Shipping & Handling</p>
      <hr>
      <h5>Total: {{ total }}$</h5>
      <hr>
      <button class="pay">Checout</button>
    </div>
  </div>
</template>
<script>

export default {
 
  data: () => ({
    shoes: [],
    shoe: [],
    selected: [],
    quantityArray: [],
    cart: []
  }),
  async mounted() {
    this.shoes = await this.$store.dispatch('basketShoes')
    for (let i = 1; i <= 10; i++) {
      this.quantityArray.push(i);
    }
    if (this.$props.shoe.quantity > 1) {
      this.selected = this.$props.shoe.quantity;
    }
  },
  computed: {
    total() {      
      return this.shoes.reduce(function(total, key) {
        return total + (Number(key.cost) * key.quantity)
      }, 0).toFixed(1)
    },
    quantity() {  
      let quantity = 0;
      this.shoes.forEach(e => {
          quantity += e.quantity
      });
      return quantity
    }
  },
  methods: {
    async removeShoes(id) {
      
      this.shoes.splice(id, 1)
      await this.$store.dispatch('removeCart', id)
    }
  }
  
}
</script>

<style scoped>
  .box {
    display: flex;
  }
  .box ul{
    display: flex;
  }
  .box li {
    display: block;
  }
  .modal-image img{
    width: 100px;
    margin-bottom: 10px;
  }
  .modal-information {
    margin-left: 40px;
    padding-top: 25px;
  }
  .modal-information h5 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }
  .remove {
    margin-left: 30px;
    padding-top: 20px;

  }
  .remove i {
    font-size: 22px;
    color: rgb(192, 29, 29);
  }
  .basket ul {
    border-bottom: 0.4px solid grey;
  }
  .basket ul:last-child {
    border: none;
  }
  .value {
    margin-left: 230px;
  }
  .pay {
    width: 280px;
    height: 60px;
    border-radius: 50px;
    border: 0.5px solid rgb(122, 122, 122);
    margin-bottom: 21px;
  }
</style>