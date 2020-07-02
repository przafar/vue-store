<template>
  <div>
    <Menubar class="fixedli"/>
    <div class="container">
      
      <div class="box row">
        <div class="basket col-md-8">
          <ul class="modal-post" v-for="(shoe, index) in shoes" :key="index" :value="shoe.id">
            <li class="modal-image">
              <img :src="shoe.image" alt="">
            </li>
            <li class="modal-information">
              <h5>{{ shoe.name }}</h5>
              <p>{{ shoe.cost }}$ Quantity: <b>{{ shoe.quantity }}</b></p>
              <h6>{{ shoe.shown }}</h6>
              <div class="options">
                <p>Quantity</p>
                <select class="select" v-model="shoe.quantity">
                  <option :key="quantity" v-for="quantity in quantityArray" :value="quantity">{{ quantity }}</option>
                </select>
                <p>Size</p>
                <select v-model="shoe.size">
                  <option :value="size" v-for="size in sizes" :key="size.id">{{ size }}</option>
                </select>
              </div>
            </li>
            <li class="remove" @click="$store.commit('removeFromCart', item)">
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
      <div class="value col-md-4 text-left">
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
    </div>
  </div>
</template>
<script>
import Menubar from '../components/menuBar'
export default {
  metaInfo: {
    title: 'Orders'
  },
  data: () => ({
    selected: [],
    quantityArray: [],
    picked: '',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11]
  }),
  mounted() {
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
    },
    shoes() {
      return this.$store.getters.PRODUCTS;
    }
  },
  methods: {

  },
  components: {
    Menubar
  }
  
}
</script>

<style scoped>
.fixedli {
    position: fixed;
    width: 100%;
    top: 55px;
    z-index: 1;
  }
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
    display: inline-block;

  }
  .modal-information p {
    margin-bottom: 5px;
  }
  .modal-information h5 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }
  .remove {
    position: absolute;
    right: 10px;  
    padding-right: 20px;
    padding-top: 20px;  
  }
  .remove i {
    font-size: 22px;
    color: rgb(192, 29, 29);
    
  }
  .basket {
    margin-top: 160px;
  }
  .basket ul {
    border-bottom: 0.4px solid grey;
  }
  .basket ul:last-child {
    border: none;
  }
  .value {
    padding-left: 30px;
    margin-bottom: 102px;
    margin-top: 180px;
  }
  .pay {
    width: 280px;
    height: 60px;
    border-radius: 50px;
    border: 0.5px solid rgb(122, 122, 122);
    margin-bottom: 21px;
  }
  .options {
    display: flex;
  }
  .options p {
    color: #757575;
    margin-bottom: 0;
    margin-right: 2px;
  }
  .options select {
    border: none;
    height: 22px;
    color: #757575;
    margin-right: 20px;
  }
  .modal-information h6 {
    color: #757575;
    font-weight: 400;
  }
  @media screen and (min-width: 370px) and (max-width: 1200px) {
    .modal-post {
      padding-left: 0px;
    }
    .modal-post li {
      margin-left: 10px;
    }
    .remove {
      padding-right: 0;
      padding-top: 30px;
    }
    .options {
      margin-bottom: 20px;
    }
  }

</style>