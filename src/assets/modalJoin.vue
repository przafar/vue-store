<template>
  <div>
    <a class="write" @click="show">Join Us</a>
    <modal height="auto" :scrollable="true" name="join">
      <div class="inform">
        <h2>Become a nike member</h2>
        <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
      </div>
      <form @submit.prevent="submitHandler">
        <div class="review form-group">
          <div class="form-group test-input">
            <input type="text" 
                  class="form-control"
                  v-model="email"
                  :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                  placeholder="Email Address" 
            >
            <small 
              class="helper-text invalid"
                v-if="$v.email.$dirty && !$v.email.required"
              >
                Please enter a valid email address.
            </small>
            <small 
              class="helper-text invalid"
                v-else-if="$v.email.$dirty && !$v.email.email"
              >
                Please enter a valid email address.
            </small>
          </div>
          <div class="form-group test-input">
            <input type="password" 
                  class="form-control"
                  v-model="password"
                  :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                  placeholder="Password" 
            >
            <span 
                  class="helper-text invalid text-danger"
                  v-if="$v.password.$dirty && !$v.password.required"
            >Password does not meet minimal requirements.</span>
          </div>
          <div class="form-group test-input">
            <input type="text" 
                  class="form-control"
                  v-model="name"
                  :class="{invalid: $v.name.$dirty && !$v.name.required }"
                  placeholder="First Name" 
            >
            <span 
                  class="helper-text invalid text-danger"
                  v-if="$v.name.$dirty && !$v.name.required"
            >Please enter a valid first name.</span>
          </div>
          <div class="form-group test-input">
            <input type="text" 
                  class="form-control"
                  v-model="lastName"
                  :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
                  placeholder="Last Name" 
            >
            <span 
                  class="helper-text invalid text-danger"
                  v-if="$v.name.$dirty && !$v.name.required"
            >Please enter a valid last name.</span>
          </div>
          <p class="member">Get a Nike Member Reward every year on your Birthday.</p>
          <div class="sels">
            <select v-model="country">
              <option :value="country" v-for="country in countries" :key="country.id">{{ country }}</option>
            </select>
          </div>
          <p class="confirm">
            <label>
              <input type="checkbox" v-model="agree" />
              <span>Sign up for emails to get updates from Nike on products, offers, and your Member benefits</span>
            </label>
          </p>
        </div>  
        <div class="ratesin">
          <button class="btn btn-success" type="submit">JOIN US</button>
        </div>
      </form>
    </modal>
  </div>
</template>
<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false,
    country: '',
    countries: [
      'Uzbekistan',
      'United States',
      'Russia',
      'Turkey',
      'Uganda',
      'United Arab Emirates',
      'United Kingdom',
      'Ukraine',
      'Italy',
      'Spain',
      'Vietnam',
      'Romania',
      'Germany',
      'Australia'
    ],
    data: new Date().toISOString().slice(0,10) 
    

  }),
 
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    name: {required},
    agree: {checked: v => v}
  },

  methods: {
    show () {
      this.$modal.show('join');
    },
    async submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        lastName: this.lastName,
        country: this.country,
        date: this.data,
      }
      try {
        await this.$store.dispatch('register', formData);
        this.$router.go('/')
        this.$modal.hide('login')


      } catch (e) {
        console.log(e)
      } 
        

     
     
    }
  },
  components: {
    
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
  .ratesin button {
    margin-top: 20px;
    width: 300px;
    background-color: black;
    color: white;

  }
  .ratesin {
    margin-top: 20px;
    text-align: center;
    display: block;
    margin-bottom: 30px;
  }
  .inform {
    text-align: center;
  }
  .inform h2 {
    color: #111111;
    padding: 32px 0px 26px;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 26px;
    font-weight: 600;
  }
  .inform p {
    color: #8d8d8d;
    padding: 0px 0px 15px;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .member {
    text-align: center;
  }
  .sels {
    text-align: center;
  }
  .sels select {
    width: 85%;
    height: 40px;
    color: #8d8d8d;
    border: 1px solid #8d8d8d;
    border-radius: 3px;
  }
  .sels select:focus {
    border: 1px solid #8d8d8d;
  }
  .confirm {
    width: 85%;
    margin-top: 20px;
    margin-left: 45px;
    text-align: center;
  }
  .confirm input {
    margin-right: 10px;
  }
  @media screen and (min-width: 370px) and (max-width: 1200px) {
    .inform {
      margin-left: 240px;
      margin-right: 20px;
    }
    .test-input {
      width: 50%;
      margin-left: 260px;
    }
    .member {
      display: none;
    }
    .sels select {
      width: 50%; 
      margin-left: 225px;
    }
    .confirm {
      margin-left: 260px;
      width: 50%;
      margin-bottom: 0;
    }
    .confirm span {
      font-size: 12px;

    }
    .ratesin {
      margin-left: 230px;
      margin-top: -20px;
    }
  }
  
  
  
</style>