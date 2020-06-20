<template>
  <div class="accordion"> 
    <button @click="review" type="button" class="accordion__button">Reviews ({{ quantity }}) <i class="fas fa-chevron-down"></i></button>
    <div class="accordion__content"  v-show="comment">
      <ul>
        <Modalreview @created="addNewComment"  />
        <li class="review-rate"  v-for="rev in comments" :key="rev.id">
          <p>{{ rev.name }} <span>{{ rev.date }}</span></p>
          <star-rating v-bind:star-size="18" active-color="#000" text-class="d-none" read-only :rating="rev.rate"></star-rating>

          <h6>{{ rev.message }}</h6>
          
        </li>
        <li class="review-rate"  v-for="rev in reviews" :key="rev.id">
          <p>{{ rev.name }} <span>{{ rev.date }}</span></p>
          <star-rating v-bind:star-size="18" active-color="#000" text-class="d-none" read-only :rating="rev.rate"></star-rating>

          <h6>{{ rev.message }}</h6>
          
        </li>
        
        
      </ul>
    </div>
    
  </div>
</template>
<script>
import Modalreview from '../components/ModalReview'
import StarRating from 'vue-star-rating'

export default {
  props: ['comments'],
  data: () => ({
    comment: false,
    reviews: []
  }),
  methods: {
    review() {
      this.comment = !this.comment
    },
    addNewComment(real) {
      this.reviews.push(real)
    },
  },
  computed: {
    quantity() {
      return this.comments.length
    }
  },
  components: {
    Modalreview, StarRating
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
  
</style>