<template>
  <div class="container">
    <div class="row">
      <div class="update col-md-12">
        <div class="text-center">
          <h2>Create New Product</h2>
        </div>
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
</template>
<script>
import {required} from 'vuelidate/lib/validators'
export default {
  name: 'ProductCreate',
  data: () => ({
    shoe: [],
    name: '',
    image: '',
    front: '',
    cost: '' 
  }),     
  validations: {
    name: {required},
    image: {required},
    cost: {required},
    front: {required},
  },
  methods: {
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      await this.$store.dispatch('createProduct', {
        image: this.image,
        front: this.front,
        name: this.name,
        cost: this.cost
      })
      this.$router.push('/admin')

    }
  },
   
}

</script>