<template>
<div class="slider container">
   <button @click="backSlide" class="back">
     <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
   </button>

   <div class="row ">
     <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
        <slideritem class="slider-image" v-for="(item,index) in shoes" :key="index" >
          <router-link @click.native="$router.go()" :key="item.id" :to="{ name: 'Add', params: { id: item.id }, }" class="shoes-side">
              <img :src="item.image" alt="">                
          </router-link>
        </slideritem>
        <div slot="loading">loading...</div>
    </slider>
    
   </div>
   <button @click="nextSlide" class="next">
     <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
   </button>
</div>
</template>
<script>
  import { slider, slideritem } from 'vue-concise-slider'
  export default {
  el: '#app',
  data () {
    return {
      shoes: [],
      options: {
        currentPage: 0,
        tracking: false,
        thresholdDistance: 0,
        thresholdTime: 200,
        infinite: 3,
        slidesToScroll: 1,
        loop: true,
        loopedSlides:1,
        pagination: false,
      }
    }
  },
  async mounted() {
    this.shoes = await this.$store.dispatch('fetchShoes')
    
  },
  methods: {
    nextSlide() {
      this.$refs.slider.$emit('slideNext')
    },
    backSlide() {
      this.$refs.slider.$emit('slidePre')
    }
  },
  components: {
    slider,
    slideritem
  }
  }
</script>
<style scoped>
  .slider {
    position: relative;
    padding: 0;
    z-index: 0;
  }
  .slider-image  {
    width: 380px;
    height: 350px;
    margin-right: 20px;
  }
  .slider-image img {
    width: 390px;
  }
  .back {
    position: absolute;
    bottom: 150px;
    margin-left: 10px;
    z-index: 4;
    border: none;
    font-size: 22px;
    background-color: white;
    padding: 0px 8px 4px 8px;
    border-radius: 50%; 
    outline: none;
    opacity: 0.6;
    transition: 1s;

  }
  .back:hover {
    box-shadow: 10px 10px 21px -12px rgba(0,0,0,0.75);
    opacity: 1;
  }
  .next {
    position: absolute;
    right: 0;
    bottom: 150px;
    margin-left: 10px;
    z-index: 4;
    border: none;
    font-size: 22px;
    background-color: white;
    padding: 0px 8px 4px 8px;
    border-radius: 50%; 
    outline: none;
    opacity: 0.6;
    transition: 1s;

  }
  .next:hover {
    box-shadow: 10px 10px 21px -12px rgba(0,0,0,0.75);
    opacity: 1;
  }
</style>