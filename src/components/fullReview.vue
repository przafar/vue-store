<template>
  <div>
    <button class="more-reviews" @click="show">More Reviews</button>
    <div class="container">
      <div class="row">
        <modal name="fs" :adaptive="true" width="100%" height="auto" :scrollable="true">
          <div class="cancel">
            <button @click="hide"><i class="fas fa-times"></i></button>
          </div>
          <div class="review">
            <div class="shoe">
              <div class="img">
                <img :src="shoe.image">
              </div>
              <div class="info">
                <h4>{{ shoe.name }}</h4>
                <p>{{ shoe.cost }}$</p>
              </div>
            </div>
            <div class="statistics">
              <div class="star-center">
                <star-rating :increment="0.01" :fixed-points="2" v-bind:star-size="32" active-color="#000" text-class="d-none" read-only :rating="average"></star-rating>
              </div>
              <h2>Reviews: {{ quantity }}</h2> 
            </div>
            <div class="comments container">
              <div class="comment" :v-if="rev <= review.length" v-for="rev in commentsToShow" :key="rev.id" >
                <div class="star-review">
                  <star-rating v-bind:star-size="30" active-color="#000" text-class="d-none" read-only :rating="review[rev -1].rate"></star-rating>
                </div>
                <div class="info-review">
                  <div class="text">
                    <p>{{ review[rev - 1].message }}</p>
                  </div>
                  <div class="name">
                    <p>{{ review[rev - 1].date }}</p>
                    <p>{{ review[rev - 1].name }} <span> New York, NY, US</span></p>
                  </div>
                </div>
              </div>
              <div class="view-more">
                <button @click="manualLoad">View more </button>
              </div>
            </div>
          </div>
        </modal>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'

export default {
  data: () => ({
    shoe: [],
    review: [],
    commentsToShow: 3

  }),
  async mounted() {
    const id = this.$route.params.id
    this.shoe = await this.$store.dispatch('fetchShoesById', id)
    this.review = await this.$store.dispatch('fetchComment', id)


  },
  methods: {
    show() {
      this.$modal.show('fs')
    },
    hide() {
      this.$modal.hide('fs')
    },
    manualLoad() {
      this.commentsToShow += 2
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
    },
    
  },
  components: {
    StarRating, 
  }
}
</script>
<style scoped>
  .shoe {
    display: flex;
    margin-left: 30px;
    margin-top: 30px;
  }
  .img img{
    width: 95px;
    margin-right: 20px;
  }
  .cancel {
    position: absolute;
    display: block;
    right: 30px;
    top: 20px;
  }
  .info {
    font-family: Arial, Helvetica, sans-serif;
  }
  .statistics {
    text-align: center;
    margin-top: 80px;
    margin-bottom: 50px;
  }
  .statistics h2 {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .star-center {
    margin: 0 680px;
  }
  .comment {
    display: flex;
    border-top: 1px solid #757575;
  }
  .star-review {
    margin-top: 50px;
  }
  .info-review {
    margin-top: 50px;
    padding-left: 50px;
  }
  .name {
    display: flex;
    margin-bottom: 50px;
  }
  .text {
    margin-bottom: 50px;
  }
  .text p {
    font-size: 18px;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
  }
  .name p {
    padding-right: 40px;
    color: #757575;
    font-family: Arial, Helvetica, sans-serif;
  }
  .view-more {
    text-align: center;
    margin-bottom: 30px;
  }
  .view-more button {
    border: none;
    background: white;
    font-weight: 600;
    border-bottom: 1px solid #757575;
    outline: none;
  }
  .cancel button {
    border: none;
    background: white;
    outline: none;

  }
  .more-reviews {
    margin-top: 10px;
    border: none;
    background: white;
    padding-left: 0;
    border-bottom: 1px solid #757575;
    outline: none;
  }
  @media screen and (min-width: 370px) and (max-width: 1200px) {
    .shoe {
      display: block;
      margin-left: 30px;
      text-align: center;
    }
    .img img {
      margin-left: 10px;
    }
    .cancel {
      top: 20px;
    }
    .star-center {
      margin-left: 120px;
    }
    .statistics h2 {
      margin-left: 20px;
    }
    .statistics {
      margin-top: 30px;
    }
    .comment {
      display: block;
    }
    .star-review {
      margin-left: 100px;
    }
    .info-review {
      text-align: center;
      margin-right: 20px;
    }
    .name p {
      padding-right: 20px;
    }
    .name {
      margin-bottom: 80px;
    }
    .view-more {
      margin-bottom: 200px;
      margin-top: 50px;
      margin-left: 100px;
      width: 50%;
    }
  }
</style>