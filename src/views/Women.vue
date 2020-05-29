<template>
    <div class="container">
        <ul>
            <router-link to='/' tag="li" v-for="post in allPosts" :key="post.id">
                <h2>{{ post.name }}</h2>
                <figure class="image">
                    <img :src="post.image" alt="">
                </figure>
            </router-link>
        </ul>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data() {
        return  { 
            cars: [{name: 'zafar'}, {name: 'munis'}, {name: 'qummi'}]
        }
    },
    computed: mapGetters(['allPosts']),
    async mounted() {
        this.$store.dispatch("fetchPosts")
    }
}
</script>
<style scoped>
    .image img {
        width: 100px;
        height: 80px;
    }
</style>