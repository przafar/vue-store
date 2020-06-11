<template>
  <div class="container">
    <div class="row">
      <div class="editside col-md-12">
        <div class="now">
          <ul class="addside">
            <li class="addphoto">
              <img :src="shoe.image">
              <img :src="shoe.front">
            </li>
            <li class="information">
              <h5><span style="color:coral">Name: </span> {{ shoe.name }}</h5>
              <h5><span style="color:coral">Cost: </span>{{ shoe.cost }}</h5>
            </li>
          </ul>
        </div>
        <div class="update col-md-12">
          <form @submit.prevent="submitHandler">
          <div class="form-group">
            <label for="exampleInputEmail1">First Image</label>
            <input type="text"
                    class="form-control" 
                    v-model="image"
                    :class="{invalid: ($v.image.$dirty && !$v.image.required)}"
                    placeholder="Only URL" 
            >
          </div>
          <span 
            class="helper-text invalid text-danger"
            v-if="$v.image.$dirty && !$v.image.required"
          >Please provide a valid URL</span>
          <div class="form-group">
            <label for="exampleInputPassword1">Second Image</label>
            <input type="text" 
                  class="form-control"
                  v-model="front"
                  :class="{invalid: ($v.front.$dirty && !$v.front.required)}"
                  placeholder="Only URL" 
            >
            <span 
            class="helper-text invalid text-danger"
            v-if="$v.front.$dirty && !$v.front.required"
          >Please provide a valid URL</span>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Name Product</label>
            <input type="text"
                    class="form-control"
                    v-model="name"
                    :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
            >
            <span 
            class="helper-text invalid text-danger"
            v-if="$v.name.$dirty && !$v.name.required"
          >Please provide a valid Name</span>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Cost Product</label>
            <input type="text" 
                    class="form-control"
                    v-model.number="cost"
                    :class="{invalid: ($v.cost.$dirty && !$v.cost.required)}"
            >
            <span 
              class="helper-text invalid text-danger"
              v-if="$v.cost.$dirty && !$v.cost.required"
            >Please provide a valid Cost</span>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {required} from 'vuelidate/lib/validators'
export default {
  name: 'ProductEdit',
  data: () => ({
    shoe: [],
    name: '',
    image: '',
    front: '',
    cost: '' 
  }),     
  async mounted() {
    const id = this.$route.params.id
    this.shoe = await this.$store.dispatch('fetchShoesById', id)
    this.name = this.shoe.name
    this.image = this.shoe.image
    this.cost = this.shoe.cost
    this.front = this.shoe.front   
  },
  validations: {
    name: {required},
    image: {required},
    cost: {required},
    front: {required},
  },
  computed: {
    
  },
  methods: {
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const categoryData = {
        id: this.shoe.id,
        name: this.name,
        cost: this.cost,
        image: this.image,
        front: this.front
      }
      await this.$store.dispatch('updateProduct', categoryData)
      this.$router.push('/admin')

    }
  },
   
}

</script>

<style scoped>
  .editside {
    display: block;
  }
  .now ul {
    padding-left: 0px;
  }
  .addside li {
    display: inline-block;
    margin-right: 20px;
  }
  .addphoto img {
    display: inline;
    width: 160px;
    margin-left: 20px;
  }


  
</style>