<template>
  <div class="accordion">
    <button @click="showen" type="button" class="accordion__button">Reviews ({{ quantity + count }}) <i class="fas fa-chevron-down"></i></button>
    
    <div class="accordion__content"  v-show="comment">
      <div class="average-rate">
        <star-rating :increment="0.01" :fixed-points="2" v-bind:star-size="28" active-color="#000" text-class="d-none" read-only :rating="average"></star-rating>     
      </div>    
      <ul>
        <Modalreview @created="addNewComment"  />
        <li class="review-rate"  v-for="rev in comments.slice(n, 3)" :key="rev.id">
          <p>{{ rev.name }} <span>{{ rev.date }}</span></p>
          <star-rating v-bind:star-size="18" active-color="#000" text-class="d-none" read-only :rating="rev.rate"></star-rating>

          <h6>{{ rev.message }}</h6>
          
        </li>
        <li class="review-rate"  v-for="rev in reviews" :key="rev.id">
          <p>{{ rev.name }} <span>{{ rev.date }}</span></p>
          <star-rating v-bind:star-size="18" active-color="#000" text-class="d-none" read-only :rating="rev.rate"></star-rating>

          <h6>{{ rev.message }}</h6>         
        </li>
        <full-review />
      </ul>
    </div>
  </div>
</template>
<script>
import Modalreview from '../components/ModalReview'
import StarRating from 'vue-star-rating'
import FullReview from './fullReview'

export default {
  
  props: ['comments'],
  data: () => ({
    comment: false,
    reviews: [],
    review: [],
    count: 0

  }),
  async mounted() {
    const id = this.$route.params.id
    this.review = await this.$store.dispatch('fetchComment', id)
  },
  methods: {
    showen() {
      this.comment = !this.comment
      this.$emit('notify')
    },
    addNewComment(real) {
      this.reviews.push(real)
      this.count++
    },
  },
  computed: {
    quantity() {
      return this.review.length
    },
    average() {
      let rate = 0;
      this.review.forEach(e => {
          rate += e.rate / this.review.length
      });
      return rate
    }
    

  },
  components: {
    Modalreview, StarRating, FullReview
  }
}
</script>
<style scoped >
  .accordion__button {
    border: none;
    background-color: white;
    outline: none;
    width: 100%;
    padding: 15px;
    cursor: pointer;
    text-align: left;
  }
  .accordion__content {
    padding: 0 15px;
    transition: ease-in-out 0.3s;
  }
  .accordion__button i {
    text-align: right;
  }
  .accordion__content ul {
    padding: 0;
  }
  .review-rate {
    display: block;
    margin-top: 30px;
  }
  .review-rate p {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    color: #111111;
    font-family: Arial, Helvetica, sans-serif;

  }
  .review-rate span {
    float: right;
    color: #757575;
    font-size: 16px;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;

  }
  .review-rate h6 {
    color: #111111;
    font-size: 16px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 15px;
  }
  .average-rate {
    margin-left: 0px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 370px) and (max-width: 1200px) {
    .accordion__content {
      padding-left: 0px;
    }
    .accordion__button {
      padding-left: 0;
    }
    .average-rate {
      margin-left: 0;
    }
  }
  
</style>