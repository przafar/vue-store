<template>
  <div class="ali">
    <a class="write" @click="show">Write a review</a>
    <modal name="hello-world">
      <form v-on:submit.prevent="submitHandler">
        <div class="review form-group">
          <div class="form-group test-input">
            <label for="exampleInputPassword1">Name</label>
            <input type="text" 
                  class="form-control"
                  v-model="name"
                  :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
                  placeholder="Name" 
            >
            <span 
                  class="helper-text invalid text-danger"
                  v-if="$v.name.$dirty && !$v.name.required"
            >Please provide a valid URL</span>
          </div>
          <div class="textarea">
            <textarea v-model="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>  
        <div class="ratesin">
          <star-rating v-bind:star-size="22" text-class="d-none" active-color="#000" @rating-selected="rating = $event" :rating="rating"></star-rating>
          <button class="btn btn-success" type="submit">Add Review</button>
        </div>
      </form>
    </modal>
  </div>
</template>
<script>
import {required} from 'vuelidate/lib/validators'
import StarRating from 'vue-star-rating'


export default {
  data: () => ({
    rating: [],
    message: [],
    name: [],
    shoe: [],
    data: new Date().toISOString().slice(0,10) 

  }),
  async mounted() {
    const id = this.$route.params.id
    this.shoe = await this.$store.dispatch('fetchShoesById', id)
  },
  validations: {
    name: {required},
    
  },
  methods: {
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    },
    submitHandler() {
      const message = {
        name: this.name,
        message: this.message,
        rate: this.rating,
        date: this.data,
        id: this.shoe.id
      };
      this.$store.dispatch('createComment', message)
      this.$emit('created', message)
      this.name = ''
      this.message = ''
      this.rating = ''
      this.$v.$reset()
    }

  },
  components: {
    StarRating
  }
}
</script>
<style scoped>
  .write {
    cursor: pointer;
    border-bottom: 1px solid #111111;
  }
  .textarea {
    width: 85%;
    margin-left: 40px;
  }
  .test-input {
    width: 85%;
    margin-left: 40px;
  }
  .ratesin {
    margin-left: 40px;
  }
  .ratesin button {
    margin-top: 20px;
  }
  .ratesin {
    margin-top: 20px;
     
  }
  
  
  
</style>