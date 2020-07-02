<template>
  <div class="all-menu">
    <Menubar class="profile-menubar"/>
    <div class="profile-menu">
      <ul class="profile-ul">
        <li><router-link tag="a" to="/Profile">Profile</router-link></li>
        <li><a>Inbox</a></li>
        <li><a>Orders</a></li>
        <li><a>Favorites</a></li>
        <li><a>Settings</a></li>
      </ul>
    </div>
    <div class="profile">
      <div class="img"></div>
      <div class="info">
        <h2>{{ info.name }} {{ info.lastName }}</h2>
        <p>Nike Member Since {{ info.date }}</p>
      </div>
    </div>
    

  </div>
</template>
<script>
import Menubar from '../components/menuBar'

export default {
  metaInfo: {
    title: `Profile`
  },
  data: () => ({

  }),
  computed: {
    info() {
      return this.$store.getters.info
    }
  },
  components: {
    Menubar
  }
}
</script>
<style scoped>
  .all-menu {
    margin-top: -100px;
  }
  .profile-menubar {
    position: fixed;
    width: 100%;
    top: 55px;
    margin-top: 0px;
  }
  .profile-ul {
    margin-top: 100px;
    text-align: center;
  }
  .profile-ul li {
    display: inline-block;
    margin-right: 20px;
    margin-left: 20px;
    cursor: pointer;
    margin-top: 160px;
  }
  .profile-ul li a {
    color: #111;
    font-weight: 600;
    padding: 0px 16px;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .profile-ul li a:hover {
    color: #757575;
  }
  .profile {
    display: flex;
    margin-top: 150px;
    margin-bottom: 250px;
    margin-left: 50px;
  }
  .img {
    width: 96px;
    height: 96px;
    display: block;
    background-color: #e5e5e5;
    border-radius: 50%;
    margin-right: 30px;
  }
  .info {
    margin-top: 10px;
  }
  
</style>