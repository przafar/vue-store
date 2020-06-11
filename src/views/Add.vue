<template>
  <div>
    <Menubar/>
    <div class="container">
      <div class="row">
        <ul class="hider">
          <form v-on:submit.prevent>
              <div class="addside row">
                <li class="col-md-4 addphoto" >
                  <img :src="shoe.image" alt="">
                </li>
                <li class="col-md-4 addphoto">
                  <img :src="shoe.front" alt="">
                </li>
                <li class="col-md-4 addinformation">
                  <h6>Men's Running Shoe</h6>
                  <p>{{ shoe.name }} <b></b></p>
                  <h5>{{ shoe.cost }}$</h5> <br>
                  <div class="row categories">            
                    <li v-for="cat in categories" :key="cat.id">
                      <img @click="updateProduct(cat.image, cat.front, cat.shown)" :src="cat.image" alt="">
                    </li>
                  </div>
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
                      </form>
                    </div>
                  </div>
                  <Select v-bind:basket="basket"/>
                  <div class="shown">
                    <p>Shown: <span>{{ shoe.shown }}</span></p>  
                  </div>
                  <button v-on:click="submitHandler" type="submit" class="btn add-cart">Add to Cart</button>
                </li>
                <div class="view">
                  <p>The Nike Air Force 1 GORE-TEX Losaew retools the classic Air Force 1 with a street-approved design that meets the standards of GORE-TEX waterproof technology. It features water-wicking flat laces, a GORE-TEX bootie and GORE-TEX branding on the heel.</p>
                </div>
              </div>
          </form>
        </ul>  
      </div>
    </div>
  </div>
</template>

<script>
import Select from '../components/select'
import Menubar from '../components/menuBar'
export default {
  name: 'Add',
  data: () => ({
    shoe: [],
    selected: [],
    quantityArray: [],
    quantity: 1,
    picked: '',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11],
    categories: [],
    selectedVariant: 2
   
    
  }),     
  async mounted() {
    const id = this.$route.params.id
    this.shoe = await this.$store.dispatch('fetchShoesById', id)
    // this.basket = await this.$store.getters.getTodoById(this.shoe.id)
    this.categories = this.shoe.categoris
    for (let i = 1; i <= 10; i++) {
      this.quantityArray.push(i);
    }
    if (this.$props.basket.quantity > 1) {
      this.selected = this.$props.basket.quantity;
    }
    // this.basket = await this.$store.getters.getTodoById(this.shoe.id)
    // this.basket = await this.$store.dispatch('fetchBasketById', id)
    // this.shoes = await this.$store.dispatch('basketShoes') 
  },
  computed: {
    updated() {
      return this.$store.getters.PRODUCTS.length
    },
    basket() {
      return this.$store.getters.getTodoById(this.shoe.id)
    }
  },
  methods: {
    submitHandler() {
      const addShoes = {
        name: this.shoe.name,
        cost: this.shoe.cost,
        image: this.shoe.image,
        quantity: this.quantity,
        size: this.picked,
        shown: this.shoe.shown, 
        id: this.shoe.id
      }
      this.$store.commit('addToCart', addShoes)
      return this.updated+1
    },
    
    updateProduct(image, front, shown) {
      this.shoe.image = image
      this.shoe.front = front
      this.shoe.shown = shown
    }

    // submitHandler() {
    //     this.m1()
    // },
    // async m1() {
    //   // const updateShoes = {
    //   //   name: this.shoe.name,
    //   //   cost: this.shoe.cost,
    //   //   image: this.shoe.image,
    //   //   quantity: this.basket.quantity+=1,
    //   //   id: this.shoe.id
    //   // }
    //   // const addShoes = {
    //   //   name: this.shoe.name,
    //   //   cost: this.shoe.cost,
    //   //   image: this.shoe.image,
    //   //   quantity: this.quantity,
    //   //   id: this.shoe.id
    //   // }
    //   // if(this.basket.name === this.shoe.name) { 
    //   //   await this.$store.dispatch('updateShoes', updateShoes)  
    //   // } else {
    //   //   await this.$store.dispatch('updateShoes', addShoes)
    //   // } 
    //   this.$emit('created') 
    // },
  },
  components: {
    Menubar, Select,
  }
}

</script>

<style scoped>
  .addside {
    margin-top: 20px;
  }
  .addside li {
    display: block;
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
  .addinformation h5 {
    font-size: 18px;
  }
  .addinformation p {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 0px;
  }
  .choose img {
    width: 69px;
  }
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
    border: 1px solid rgb(12, 11, 11);
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
  .categories {
    display: flex;
    margin-bottom: 30px;
    padding-left: 15px;
  }
  .categories li {
    padding-right: 8px;
    padding-top: 8px;
  }
  .categories img {
    width: 69px;
  }
  .shown {
    margin-top: 10px;
  }
  .shown p {
    font-size: 16px;
  }
  .shown span {
    font-weight: 400;
  } 
  
</style>