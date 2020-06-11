<template>
  <div class="admin">
    
    <div class="container">
      <div class="row">
        <div class="addProduct col-md-12">
      <router-link to="/ProductCreate" tag="button" class="btn btn-primary">Add</router-link>
    </div>
        <div class="col-md-4 menubar">
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, libero, ipsa doloremque sed laudantium vel cupiditate dolorem explicabo distinctio velit, similique nesciunt officiis iure quasi commodi aperiam suscipit exercitationem repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur magnam rerum at. Atque, reprehenderit nesciunt dignissimos ipsam nulla, asperiores,</h4>
        </div>
        <div class="col-md-8">
          <Loader class="loading" v-if="loading"/>
          <ul class="allposts">
            <li v-for="shoe in shoes" :key="shoe.id" :value="shoe.id">
              <div class="col-md-8">
                <router-link :key="shoe.id" :to="{ name: 'Add', params: { id: shoe.id }, }" class="shoes-side">
                  <div class="shoes">
                    <figure class="image">
                        <img :src="shoe.image" alt="">
                    </figure>
                    <a class="post-cost">
                        <p>{{ shoe.name }}</p>
                    </a>     
                  </div>
                </router-link>
              </div>
              <div class="col-md-4">
                <router-link tag="button" :key="shoe.id" :to="{ name: 'ProductEdit', params: {id: shoe.id} }" class="btn btn-danger">Edit</router-link>
              </div>
            </li>   
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from '../components/Loaders'
export default {
  data: () => ({
    name: 'admin',
    shoes: [],
    loading: true
  }),
  async mounted() {
    this.shoes = await this.$store.dispatch('fetchShoes')
    this.loading = false
  },
  components: {
    Loader
  }
    
}
</script>
<style scoped>
  .admin {
    margin-top: 30px;
    border-top: 0.5px solid #b1b1b1;
  }
  .allposts li{
    display: flex;
    margin-top: 20px;
  }
  .image img {
    width: 85px;
    height: 100px;
    margin-right: 20px;
  }
  .shoes {
    display: flex;
    margin-top: 20px;
  }
  .shoes a {
    color: #000;
    font-size: 18px;
  }
  .allposts button {
    margin-top: 20px;
    width: 120px;
    height: 40px;
    float: right;
  }
  .allposts {
    padding: 0px;
  }
  .loading {
    margin-top: 50px;
    margin-left: 350px;
  }
  .menubar {
    margin-top: 30px;
  }
  .addProduct {
    margin-top: 20px;
    padding-right: 30px;
    text-align: right;
  }
    
</style>