<template>
  <div class="relative">
    <div class="modal-search relative">
      <input type="text"
             placeholder="Search"
             class="input-search outline-none "
             v-model="search"
             @blur="searchVisibleResult = false"
             @focus="searchVisibleResult = true"
             @keydown.esc="searchVisibleResult = false"
             @keydown="performSearch"
             @input="softReset"
             ref="search"
      >
      <button class="input-button" @click="reset">
        <i>
          <svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
          </svg>
        </i>
      </button>
    </div>
    <div v-if="search.length > 1 && searchVisibleResult" v-body-scroll-lock="searchVisibleResult"  class="search-text border left-0 right-0 mb-4 mt-2 shadow overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mates">
            <h4>Top Suggestions</h4>
            <li @mousedown.prevent="searchVisibleResult = true" v-for="(shoe, index) in filteredBlogs" :key="index">
              <a :href="shoe.id" class="shoe-design" :key="shoe.id">
                <div class="img-shoe">
                  <img :src="shoe.image" alt="">
                </div>
                <div class="text-shoe">
                  <h6>{{ shoe.name }}</h6>
                  <p>{{ shoe.cost }}$</p>
                </div>
              </a>
            </li>
          </div>
          <div class="col-md-4 rates">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque, aperiam maiores distinctio quia minus ratione fugit molestiae quasi iste iusto ducimus dolor? Voluptatibus dolores sit, quasi ab sint numquam!</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data: () => ({
    search: '',
    searchVisibleResult: false,
    shoes: [],
    loading: true,
    results: [],
    filter: []
  }),
  async mounted() {
    this.shoes = await this.$store.dispatch('fetchShoes')
    this.loading = false
  },
  methods: {
    softReset() {
      this.searchVisibleResult = true
    },
    focusSearch(e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    },
    reset() {
      this.search = ''
    }
  },
  computed: {
    filteredBlogs(){
      var self = this;
      return this.shoes.filter(function (shoe) {
        return shoe.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0
      });
    }
  }

}
</script>
<style scoped>
  .modal-search {
    position: relative;
  }
  .input-search {
    background-color: white;
    border: 1px solid gray;
    border-radius: 2px;
    outline: none;
    width: 200px;
    height: 40px;
    padding-left: 15px;
    float: right;
    margin-top: 17px;
    margin-right: 20px;
  }
  .search-text {
    position: absolute;
    background-color: #f7f7f7;
    border: 1px solid black;
    right: 0;
    top: 140px;
    width: 82%;
    height: 74.5%;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    z-index: 10;
  }
  .search-text a {
    cursor: pointer;
    color: #000000;
    text-decoration: none;
  }
  .rates {
    background-color: #e6e6e6;
    height: 428px;
  }
  .mates {
    height: 400px;
  }
  .mates h4 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #757575;
    padding-top: 22px;
    padding-left: 15px;
    font-weight: 600;
  }
  .mates li {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
  }
  .shoe-design {
    display: flex;
 
  }
  .img-shoe img {
    width: 106px;
  }
  .text-shoe {
    padding-top: 15px;
    padding-left: 30px;
  }
  .input-button {
    position: absolute;
    right: 28px;
    top: 23.5px;
    border: none;
    background-color: white;
    outline: none;
  }
  
</style>