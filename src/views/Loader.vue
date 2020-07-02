<template>
	<div class="full" >
      <Loader class="loading" v-if="loading" />
  </div>
</template>
<script>
import Loader from '../components/Loaders'

export default {
  data: () => ({
    loading: true,
   
  }),
  components: {
    Loader
  }
}
</script>
<style scoped>
  .full {
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 9999;
    position: fixed;
  }
  .loading {
    margin-top: 300px;
  }
</style>
