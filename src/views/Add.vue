<template>
  <div>
    <Menubar class="fixedli"/>
    <div class="container">
      <div class="row">
        <Loader class="loading" v-if="loading"/>
        <ul class="hider">
          <form v-on:submit.prevent>
              <div class="addside row">
                <li class="col-md-4 addphoto" >
                  <img :src="shoe.image" alt="">
                  <img :src="shoe.back" alt="">
                  <img :src="shoe.photo" alt="">
                </li>
                <li class="col-md-4 addphoto">
                  <img :src="shoe.front" alt="">
                  <img :src="shoe.side" alt="">
                  <img :src="shoe.pic" alt="">
                </li>
                <li class="col-md-4 addinformation">
                  <h6>Men's Running Shoe</h6>
                  <p>{{ shoe.name }} <b></b></p>
                  <h5>{{ shoe.cost }}$</h5> <br>
                  <div class="row categories">            
                    <li v-for="cat in categories" :key="cat.id">
                      <img @click="updateProduct(cat.image, cat.front, cat.shown, cat.pic, cat.photo, cat.back, cat.side )" :src="cat.image" alt="">
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
                    <h6>{{ shoe.about }}</h6>  
                  </div>
                  <button v-on:click="submitHandler" type="submit" class="btn add-cart">Add to Cart</button>
                  <Reviews :comments="reviews" />
                  
                </li>
                <div class="view">
                  <p>The Nike Air Force 1 GORE-TEX Losaew retools the classic Air Force 1 with a street-approved design that meets the standards of GORE-TEX waterproof technology. It features water-wicking flat laces, a GORE-TEX bootie and GORE-TEX branding on the heel.</p>
                </div>
                <Slider />

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
import Reviews from '../components/Reviews'
import Loader from '../components/Loaders'
import Slider from '../components/Slider'

export default {
  metaInfo: {
    title: `Shoe`
  },
  name: 'Add',
  data: () => ({
    shoe: [],
    selected: [],
    quantityArray: [],
    quantity: 1,
    picked: '',
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11],
    categories: [],
    selectedVariant: 1,
    reviews: [],
    loading: true

   
  }),     
  async mounted() {
    const id = this.$route.params.id
    this.reviews = await this.$store.dispatch('fetchComment', id)
    this.shoe = await this.$store.dispatch('fetchShoesById', id)
    this.loading = false
    
    this.categories = this.shoe.categoris
    for (let i = 1; i <= 10; i++) {
      this.quantityArray.push(i);
    }
    if (this.$props.basket.quantity > 1) {
      this.selected = this.$props.basket.quantity;
    }
    

  },

  computed: {
    updated() {
      return this.$store.getters.PRODUCTS.length
    },
    basket() {
      return this.$store.getters.getTodoById(this.shoe.id)
    },
   
    
    
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
      this.$store.commit('saveData')
    }, 
    
    updateProduct(image, front, shown, photo, back, side, pic) {
      this.shoe.image = image
      this.shoe.front = front
      this.shoe.shown = shown
      this.shoe.back = back
      this.shoe.side = side
      this.shoe.photo = photo
      this.shoe.pic = pic
    },
   
  },
  components: {
    Menubar, Select, Reviews, Loader, Slider
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
  .addside {
    margin-top: 150px;
  }
  .addside li {
    display: block;
    padding: 0;
  }
  .addphoto img {
    width: 360px;
    margin-bottom: 35px;
  }
  .view {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
  }
  .loading {
    margin-left: 46%;
    margin-top: 360px;
    margin-bottom: 150px;
  }
  .add-cart {
    margin-top: 20px;
    margin-bottom: 15px;
    width: 340px;
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
    padding-right: 50px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .select-size p {
    color: #000000;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .categories {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    padding-left: 15px;
  }
  .categories li {
    padding-right: 10px;
    padding-top: 10px;
  }
  .categories img {
    width: 69px;
  }
  .shown {
    margin-top: 10px;
    padding-right: 50px;
  }
  .shown p {
    font-size: 16px;
  }
  .shown span {
    font-weight: 400;
  }
  .shown h6 {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 370px) and (max-width: 1200px) {
    ul {
      padding: 0 30px;
    }
    .categories {
      margin-right: 10px;
    }
    .view {
      width: 90%;
      padding-left: 10px;
    }
  }
  
</style>