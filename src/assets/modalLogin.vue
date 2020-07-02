<template>
  <div>
    <div class="dropdown" v-if="name">
      <button class="dropbtn"><i class="fas fa-user"></i>My account</button>
      <div class="dropdown-content">
        <router-link tag="a" to="/Profile">Profile</router-link>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <a class="write-1" @click="logout">Log out</a>

      </div>
    </div>
    <a class="write" v-else @click="show">Join/Log In To Nike Member Profile</a>
    <modal height="auto" :scrollable="true" name="login">
      <div class="logo col-md-12">
        <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/065fea46998397.Y3JvcCwyMTgzLDE3MDksNDgsMA.png" alt="">
        <p>YOUR ACCOUNT FOR <br> EVERYTHING NIKE</p>
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
                  v-model.trim="password"
                  :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                  placeholder="Password" 
            >
            <span 
                  class="helper-text invalid text-danger"
                  v-if="$v.password.$dirty && !$v.password.required || !$v.password.minLength"
            >Password does not meet minimal requirements.</span>
          </div>
          <div class="terms">
            <p>By logging in, you agree to Nike's Privacy Policy and Terms of Use.</p>
          </div>
        </div>  
        <div class="ratesin">
          <button class="btn btn-success" type="submit">SIGN IN</button>
        </div>
        <ul class="memberli">
          <li>Not a member?</li>
          <li>
            <modal-join />
          </li>
        </ul>
      </form>
    </modal>
  </div>
</template>
<script>
import modalJoin from './modalJoin'
import {email, required, minLength} from 'vuelidate/lib/validators'



export default {
  data: () => ({
    email: '',
    password: ''

  }),
  async mounted() {
    if(!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
  },
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    show () {
      this.$modal.show('login');
    },
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch() 
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', formData)
        this.$router.go('/')

        this.$modal.hide('login')

      } catch (e) {
        console.log(e)
      }
    },
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.go('/')
    }
    
  },
  computed: {
    name() {
      return this.$store.getters.info.name
    }
  },

  components: {
    modalJoin
  }
}
</script>
<style scoped>
  .write {
    cursor: pointer;
    border-bottom: 1px solid #111111;
  }
  .write-1 {
    cursor: pointer;
    display: block;
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
  
  .logo {
    text-align: center;
  }
  .logo img {
    margin-top: 20px;
    width: 60px;
  }
  .logo p {
    padding: 10px 0px 27px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 26px;
  }
  .terms {
    text-align: center;
  }
  .terms p {
    color: #111111;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .memberli {
    text-align: center;
    margin-bottom: 30px;
  }
  .memberli li {
    display: inline-block;
    margin-right: 10px;
  }
  .dropbtn {
    background-color: #fff;
    color: #111111;
    padding: 16px;
    font-size: 16px;
    border: none;
    font-weight: 600;

  }
  .dropdown {
    position: relative;
    display: inline-block;
    margin-top: -30px;
  }
  .dropdown button {
    padding-right: 0;
  }
  .dropbtn i {
    padding-right: 10px;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 999;
    text-align: left;
    
  }
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block; 
  }
  .dropdown-content a:hover {background-color: #ddd;}
  .dropdown:hover .dropdown-content {display: block;}
    
  @media screen and (min-width: 370px) and (max-width: 1200px) { 
    .write {
      border: none;
      font-weight: 600;
    }
    .logo {
      margin-left: 110px;
    }
    .test-input {
      width: 50%;
      margin-left: 260px;
    }
    .terms {
      margin-left: 260px;
      margin-right: 30px;
    }
    .ratesin {
      margin-left: 225px;
    }
    .memberli {
      margin-left: 200px;
    }
  }
  
</style>